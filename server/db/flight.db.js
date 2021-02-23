import pool from "./pool";

export default {
    selectWithDate:async (date)=>{
        const {rows} = await pool.query(
            "select * from flight_details where date = $1",[date]
        )
        return rows
    }
}