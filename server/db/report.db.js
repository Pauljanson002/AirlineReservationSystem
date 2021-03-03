import pool from "./pool";
export default {
    getFlightReportByAgeGroup:async (data)=>{
        try{
           const {rows} = await pool.query('SELECT passenger_name,passport_num,age_divider(date,passenger_dob) FROM flight NATURAL JOIN ticket NATURAL JOIN booking NATURAL JOIN passenger WHERE flight_id=find_next_flight($1);'
           ,[data.airplane_num]) ;
           return rows
        }
        catch (e) {
           console.log(e)
        }
    },
    getPassengerReportByDestination:async (data)=>{
        try{
            const {rows} = await pool.query(
                'SELECT * from  get_passenger_count_to_destination($1,$2,$3);',
                [data.destination,data.start_date,data.end_date]
            )
            return rows
        }catch (e) {
           console.log(e)
        }
    },
    getBookingReportByPassengerType:async (data)=>{
        try{
            const {rows} = await pool.query(
                'SELECT type,reg_user_type,COUNT(DISTINCT booking_code) FROM booking LEFT JOIN registered_user ON booking.booked_by=registered_user.user_id JOIN users ON users.user_id=booking.booked_by NATURAL JOIN ticket NATURAL JOIN flight_details WHERE date BETWEEN $1  AND $2 GROUP BY type,reg_user_type;',
                [data.start_date,data.end_date]
            )
            return rows
        }
        catch (e) {
            console.log(e)
        }
    },
    getPassengerCountData:async (data)=>{
        try{
            const{rows} = await pool.query(
                'SELECT * FROM details_for_destinations WHERE from_airport=$1 AND to_airport=$2 AND to_timestamp(concat(date,\' \',departure_time),\'YYYY-MM-DD HH24:MI:SS\')<NOW();',
                [data.from_airport,data.to_airport]
            )
            return rows
        }
        catch (e) {
            console.log(e)
        }
    },
    getRevenueReport:async ()=>{
        try{
            const{rows} = await pool.query(
                'SELECT * FROM generate_revenue_by_each_aircraft_type;'
            )
            return rows
        }
        catch (e) {
            console.log(e)
        }
    }
}