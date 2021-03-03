import express from 'express'
import {
    getAllAirplanes
} from "../controller/airplane.controller";
const router = express.Router()

router.route('/api/airplane/').get(getAllAirplanes)

export default router