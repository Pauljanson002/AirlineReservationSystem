import pool from "./pool";
export default {
    selectGuestUser:async()=>{

        const {rows} = await pool.query("select * from users where type = 'guest'");
        const randomNumber = Math.floor(Math.random()*10)
        return rows[randomNumber]
    }
}