import flight_db from "../db/flight.db";
const listFlightDetailsByDate = async (req, res, next) => {
  try {
    const flights = await flight_db.selectWithDate(req.params.date);
    res.json(flights);
  } catch (e) {
    console.log(e);
  }
};

const listFlightSeatDetailsByFlightId = async (req,res,next)=>{
  try{
    const flights = await flight_db.selectSeatCountWithFlightId(req.params.flight_id);
    res.json(flights);
  }catch (e) {
    console.log(e);
  }
}
const readSeatPricesByFlightId = async (req,res,next)=>{
  try{
    const prices = await flight_db.selectSeatPricesWithFlightId(req.params.flight_id);
    res.json(prices)
  }catch (e) {
    console.log(e)
  }
}

const getClosedSeatsByFlightId = async (req,res,next)=>{
  try{
      const closed_seats = await flight_db.selectClosedSeatsWithFlightId(req.params.flight_id);
      res.json(closed_seats)
  }catch (e) {
    console.log(e)
  }
}
const bookFlights = async (req,res,next)=>{
  try{
    const body =req.body
    const user = body.user;
    const seats = body.seats;
    const amounts = body.amounts;
    await flight_db.insertFlightBookings(req.params.flight_id,user,seats,amounts)
    res.status(200).json({
      "message":"booked successfully"
    })
  }
  catch (e) {
    console.log(e)
  }
}
const createFlight = async (req,res,next)=>{
  try{
    const query = req.body
    await flight_db.insertFlight(query)
    res.status(200).json({
      "message":"Flight Added Successfully"
    })
  }
  catch (e) {
    console.log(e)
    if(e.code === '23502'){
      res.status(400).json({
        "error":"Same country Flights"
      })
      return
    }
    res.status(400).json({
      "error":e.toString()
    })
  }
}

const addDelay = async (req,res,next)=>{
  try{
    const query = req.body
    query["flight_id"] = req.params.flight_id
    await flight_db.updateFlightWithDelay(query)
    res.status(200).json({
      "message":"Delay added successfully"
    })
  }catch (e) {
    console.log(e)
    res.status(400).json({
      "error":"Some error occured"
    })
  }
}

export default { addDelay,listFlightDetailsByDate,listFlightSeatDetailsByFlightId ,readSeatPricesByFlightId,getClosedSeatsByFlightId,bookFlights,createFlight};