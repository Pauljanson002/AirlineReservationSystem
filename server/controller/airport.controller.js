import airport_db from './../db/airport.db'

const getAllAirports = (req,res,next)=>{
    const airports = airport_db.selectAllAirportCodes()
    res.status(200).json(airports)
}

export {getAllAirports}