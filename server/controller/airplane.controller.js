import airplane_db from './../db/airplane.db'

const getAllAirplanes = async (req, res, next) => {
    const airplanes = await airplane_db.selectAllAirplanes()
    res.status(200).json(airplanes)
}

export {getAllAirplanes}