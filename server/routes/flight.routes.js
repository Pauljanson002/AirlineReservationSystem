import express from 'express'
import flightController from '../controller/flight.controller'

const router = express.Router()
router.route('/api/flight/:date').get(flightController.listFlightDetailsByDate)

export default router