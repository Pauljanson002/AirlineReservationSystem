const listFlightsByDate = async (date)=>{
    try{
        let response = await fetch("/api/flight/"+date,{
            method:'GET'
        })
        return await response.json()
    }
    catch (e) {
       console.log("flight-api.js ")
       console.log(e)
    }
}
const listFlightSeatCountByFlightId = async (flight_id)=>{
    try{
        let response = await fetch("/api/flight/get-seat-details/"+flight_id,{
            method:'GET'
        })
        return await response.json()
    }
    catch (e) {
       console.log("flight-api.js line 21")
       console.log(e)
    }
}

export {listFlightsByDate,listFlightSeatCountByFlightId}