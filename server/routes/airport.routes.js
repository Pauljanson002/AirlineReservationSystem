import express from 'express'
import {
   getAllAirports
} from "../controller/airport.controller";
const router = express.Router()

router.route('/api/airport/').get(getAllAirports)

export default router