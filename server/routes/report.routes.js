import express from 'express'
import {
    readBookingReportByPassengerType,
    readFlightReportsByAge, readPassengerCountData,
    readPassengerReportByDestination, readRevenueReport
} from "../controller/report.controller";

const router = express.Router()

router.route('/api/report/age-group-report/:airplane_num').get(readFlightReportsByAge)
router.route('/api/report/get-passenger-report-by-dest/').post(readPassengerReportByDestination)
router.route('/api/report/get-booking-report/').post(readBookingReportByPassengerType)
router.route('/api/report/get-passenger-counts-report/').post(readPassengerCountData)
router.route('/api/report/get-revenue-report/').get(readRevenueReport)
export default router