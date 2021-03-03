import pool from "./pool";
export default {
    selectAllAirportCodes:async ()=>{
        const {rows} = await pool.query("select * from airport;");
        return rows
    }
}