import pool from "./pool";

export default {
    selectWithUsername:async (username)=>{
        const {rows} = await pool.query(
            "SELECT * " +
            " from user_employee_occupation where emp_user_name = $1",[username]
        )
        if(rows.length === 0 ){
            return {}
        }
        return rows[0]
    },}