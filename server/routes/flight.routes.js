import express from 'express'
import flightController from '../controller/flight.controller'

const router = express.Router()
router.route('/api/flight/:date').get(flightController.listFlightDetailsByDate)
router.route('/api/flight/get-seat-details/:flight_id').get(flightController.listFlightSeatDetailsByFlightId)

export default router