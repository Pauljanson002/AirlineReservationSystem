import express from 'express'
import authController from '../controller/auth.controller'

const router = express.Router()

router.route('/api/auth/signin').post(authController.signin)
router.route('/api/auth/signout').get(authController.signout)
router.route('/api/auth/signin-as-guest').post(authController.signInAsGuest)

export default router