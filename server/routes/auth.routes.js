import express from 'express'
import authController from '../controller/auth.controller'

const router = express.Router()

router.route('/api/auth/signin').post(authController.signin)
router.route('/api/auth/signout').get(authController.signout)

export default router