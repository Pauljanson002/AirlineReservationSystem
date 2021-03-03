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
const readSeatPricesByFlightId = async (flight_id)=>{
    try{
        let response = await fetch("/api/flight/get-seat-prices/"+flight_id,{
            method:'GET'
        })
        return await response.json()
    }
    catch (e) {
       console.log(e)
    }
}
const getClosedSeatsByFlightId = async (flight_id)=>{
    try{
        let response = await fetch("/api/flight/get-closed-seats/"+flight_id,{
            method:'GET'
        })
        return await response.json()
    }
    catch (e) {
       console.log(e)
    }
}

const bookFlights = async (flight_id,seats,user)=>{
   try{
       let response = await fetch("/api/flight/book/"+flight_id,{
           method:'POST',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               'user':user,
               'seats':seats.seats,
               'amounts':seats.amounts
           })
       })
       return await response.json()
   } catch (e) {
      console.log(e)
   }
}
const createFlight = async (query)=>{
    try{
        let response = await fetch('/api/flight/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(query)
        })
        return  await response.json()
    }catch (e) {
       console.log(e)
    }
}
const addDelayForFlight = async (query)=>{
    try{
        let response = await fetch('/api/flight/add-delay/'+query.flight_id,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(query)
        })
        return await response.json()
    }catch (e) {
       console.log(e)
    }
}


export {listFlightsByDate,listFlightSeatCountByFlightId,readSeatPricesByFlightId,getClosedSeatsByFlightId,bookFlights,createFlight,addDelayForFlight}