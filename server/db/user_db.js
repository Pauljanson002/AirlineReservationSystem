import pool from "./pool";
export default {
    selectGuestUser:async()=>{
        const {rows} = await pool.query('select * from users where user_id = 49');
        return rows[0]
    }
}