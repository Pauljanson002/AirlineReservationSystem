
import jwt from "jsonwebtoken";
import config from "../../config/config";
import employee_db from "./../db/employee.db"
const signin = async (req, res)=> {
    try {
        let employee = await employee_db.selectWithUsername(req.body.username)
        if (!employee) {
            return res.status('401').json({
                error: "Employee Not found"
            })
        }
        if (req.body.hashed_password.trim() !== employee.password.trim()) {
            return res.status('401').json({
                error: "Username and password does not match"
            })
        }

        const token = jwt.sign({
            id: employee.employee_id
        }, config.jwtSecret)

        res.cookie('t', token, {expire: new Date() + 9999})
        return res.json({
            token: token,
            employee: {
                id: employee.employee_id,
                emp_user_name: employee.emp_user_name,
                employee_name: employee.employee_name,
                occupation: employee.occupation
            }
        })
    } catch (e) {
        console.log(e)
        return res.status(400).json({
            error: "Error occurred"
        })
    }
}
export default {signin}
