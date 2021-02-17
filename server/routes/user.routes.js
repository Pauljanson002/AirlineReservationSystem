import express from 'express'
import userController from '../controller/user.controller'

const router = express.Router()

router.route('/')
    .post(userController.create)
router.route('/list').get()
router.route('/username_check/:username').get(userController.registeredUsernameCheck)

export default router