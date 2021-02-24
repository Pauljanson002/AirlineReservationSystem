import pool from "./pool";

export default {
    selectWithDate:async (date)=>{
        const {rows} = await pool.query(
            "select * from flight_details where date = $1",[date]
        )
        return rows
    },
    selectSeatCountWithFlightId:async (flight_id)=>{
        const {rows} = await pool.query(
            "select * from seats_for_flight where flight_id = $1",[flight_id]
        )
        return rows[0]
    }
}