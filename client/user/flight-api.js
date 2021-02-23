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

export {listFlightsByDate}