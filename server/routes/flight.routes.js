import express from 'express'
import flightController from '../controller/flight.controller'

const router = express.Router()
router.route('/api/flight/:date').get(flightController.listFlightDetailsByDate)
router.route('/api/flight/get-seat-details/:flight_id').get(flightController.listFlightSeatDetailsByFlightId)
router.route('/api/flight/get-seat-prices/:flight_id').get(flightController.readSeatPricesByFlightId)
router.route('/api/flight/get-closed-seats/:flight_id').get(flightController.getClosedSeatsByFlightId)
router.route('/api/flight/book/:flight_id').post(flightController.bookFlights)
router.route('/api/flight/').post(flightController.createFlight)
router.route('/api/flight/add-delay/:flight_id/').post(flightController.addDelay)
export default router