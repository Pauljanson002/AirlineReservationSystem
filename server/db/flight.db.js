import pool from "./pool";

export default {
    selectWithDate:async (date)=>{
        const {rows} = await pool.query(
            "select * from select_flights_with_date($1)",[date]
        )
        return rows
    },
    selectSeatCountWithFlightId:async (flight_id)=>{
        const {rows} = await pool.query(
            "select * from seats_for_flight where flight_id = $1",[flight_id]
        )
        return rows[0]
    },
    selectSeatPricesWithFlightId:async (flight_id)=>{
        const {rows} = await pool.query(
            "select * from select_seat_prices_with_flight_id($1) ",[flight_id]
        )
        return rows[0]
    },
    selectClosedSeatsWithFlightId:async (flight_id)=>{
        const {rows} = await pool.query({
            text: `select seat_num from ticket_state_view where flight_id = $1; `,
            values: [flight_id],
            rowMode: 'array'
        })
        return rows.flat()
    },
    insertFlightBookings:async (flight_id,user,seats,amounts)=>{
        const client  = await pool.connect()


        try{
            await client.query('begin')
            const bookingcode = new Date().toISOString()+'.'+String(user.id).padStart(4,'0')
            console.log(bookingcode)
          for (const seatnum of Object.keys(seats)) {
                const result = await client.query('select * from get_ticket_id_using_seat_num_and_flight_id($1,$2);',
                    [seatnum,flight_id])
                const ticket_id = result.rows[0].get_ticket_id_using_seat_num_and_flight_id;
                console.log(ticket_id)
                const result2 = await client.query('select * from insert_passenger_if_not_exists($1,$2,$3);',
                    [seats[seatnum].passenger_name,seats[seatnum].passenger_passport_no,
                        seats[seatnum].passenger_dob])
                const passenger_id = result2.rows[0].insert_passenger_if_not_exists
                console.log(passenger_id)
                await client.query('insert into booking(ticket_id,passenger_id,booked_by,booking_code)' +
                    ' values($1,$2,$3,$4);',[ticket_id,passenger_id,user.id,bookingcode])

          }
            await client.query('insert into payment(booking_code,standard_price,discount,price_to_pay) values ($1,$2,$3,$4) ',
                [bookingcode,amounts.total,amounts.discount,amounts.final_price])
            await client.query('commit')
        }catch (e) {
            client.query('rollback')
           console.log(e)
        }finally {
            client.release()
        }
    },
    insertFlight:async (query)=>{
        const client = await pool.connect()
        try{
            await client.query('begin')
            const {rows} = await client.query('select * from insert_new_flight($1,$2,$3,$4,$5,$6);',
                [
                    query.from_airport,
                    query.to_airport,
                    query.airplane_num,
                    query.date,
                    query.departure_time,
                    query.scheduled_by
                ])
            const flight_id = rows[0].insert_new_flight;
            const result = await client.query('select * from get_total_rows_with_flight_id($1);',[flight_id])
            const total_rows = result.rows[0].get_total_rows_with_flight_id
            for(let row = 1 ; row<=total_rows;row++){
               for(const column of ['A', 'B', 'C', 'D', 'E', 'F'] ) {
                   await client.query('insert into ticket (flight_id,airplane_num,seat_num) values ($1,$2,$3);',
                       [
                           flight_id,
                           query.airplane_num,
                           column + String(row).padStart(2, '0')
                       ])
               }
            }
            console.log('Flight adding done')
            await client.query('commit')
        }
        catch (e) {
           client.query('rollback')
            throw e
        }finally {
            client.release()
        }

},
    updateFlightWithDelay:async (query)=>{
        try{
            await pool.query('update flight set delay_time = $1 where flight_id = $2',[query.delay,query.flight_id])
            console.log("flight delay added")
        }
        catch (e) {
           throw e
        }
    }
}