import express from 'express'
import {
    cancelBookingWithBookingCode,
    confirmBookingWithBookingCode,
    listBookingWithUserId
} from "../controller/booking.controller";
const router = express.Router()

router.route('/api/booking/list/:user_id').get(listBookingWithUserId)
router.route('/api/booking/confirm/:booking_code').get(confirmBookingWithBookingCode)
router.route('/api/booking/cancel/:booking_code').get(cancelBookingWithBookingCode)
export default router