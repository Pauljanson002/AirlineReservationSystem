import pool from "./pool";
export default {
    selectAllAirplanes:async ()=>{
        const {rows} = await pool.query("select * from airplane;");
        return rows
    }
}