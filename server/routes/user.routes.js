import express from 'express'
import userController from '../controller/user.controller'

const router = express.Router()

router.route('/api/registered_user/')
    .post(userController.create)
router.route('/api/registered_user/list').get()
router.route('/api/registered_user/username_check/:username').get(userController.registeredUsernameCheck)
router.route('/api/registered_user/:userId').put()

export default router