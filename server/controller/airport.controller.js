import airport_db from './../db/airport.db'

const getAllAirports = async (req, res, next) => {
    const airports = await airport_db.selectAllAirportCodes()
    res.status(200).json(airports)
}

export {getAllAirports}