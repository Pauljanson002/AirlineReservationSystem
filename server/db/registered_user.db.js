import pool from "./pool";

export default {
    insert:async (registered_user)=>{
        await pool.query(
            "INSERT INTO registered_user values($1,$2,$3,$4)",
            [registered_user.id,registered_user.name,registered_user.username,
            registered_user.hashed_password]
        )
    },
    selectWithUsername:async (username)=>{
        const {rows} = await pool.query(
            "SELECT * " +
            " from registered_user " +
            "where username = $1 limit 1",[username]
        )
        if(rows.size === 0 ){
           return {}
        }
        return rows[0]
    }
}