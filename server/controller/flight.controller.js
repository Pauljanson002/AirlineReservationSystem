import flight_db from "../db/flight.db";
const listFlightDetailsByDate = async (req, res, next) => {
  try {
    const flights = await flight_db.selectWithDate(req.params.date);
    res.json(flights);
  } catch (e) {
    console.log(e);
  }
};

export default { listFlightDetailsByDate };