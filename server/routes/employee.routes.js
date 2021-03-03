import express from 'express'
import employeeController from './../controller/employee.controller'
const router = express.Router()
router.route('/api/employee/auth/signin').post(employeeController.signin)


export default router