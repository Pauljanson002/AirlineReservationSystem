import pool from "./pool";

export default {
    insert:async (registered_user)=>{
        const client = await pool.connect()

        try{
            await client.query('BEGIN')
            const queryText = 'INSERT INTO users(first_name,last_name,email,telephone)' +
                ' VALUES ($1,$2,$3,$4) RETURNING user_id'
            const {rows} = await client.query(queryText,[registered_user.first_name,
            registered_user.last_name,registered_user.email,registered_user.telephone])
            const nextQuery = 'INSERT INTO registered_user(user_id,user_name,hashed_password,booking_count,discount_percentage) ' +
                'VALUES ($1,$2,$3,$4,$5)'
            await client.query(nextQuery,
                [rows[0].user_id,registered_user.user_name,registered_user.hashed_password,0,0])
            await client.query('COMMIT')
        }catch (e) {
           console.log(e)
           await client.query('ROLLBACK')
        }finally {
            client.release()
        }
    },
    selectWithUsername:async (username)=>{
        const {rows} = await pool.query(
            "SELECT * " +
            " from registered_user " +
            "where user_name = $1 limit 1",[username]
        )
        if(rows.length === 0 ){
           return {}
        }
        return rows[0]
    },
    RegisteredUsernameCheck:async (username)=>{
        const {rows} = await pool.query(
            'SELECT * ' +
            'from registered_user ' +
            'where user_name = $1 limit 1',[username]
        )
        if(rows.length ===0) {
            return true
        }else{
            return false
        }
    },
    delete:async (registered_user) =>{
        const value = await pool.query(
            "DELETE FROM registered_user where id = $1",[registered_user.id]
        )

}
}
//todo
// Add constraint for type attribute