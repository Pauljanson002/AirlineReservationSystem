const getAllAirportCodes = async ()=>{
    try{
        let response = await fetch('/api/airport',{
            method:'GET'
        });
        let arr = await response.json()
        let airportCodes = arr.map((item,i)=>{
            return item.airport_code
        })
        return airportCodes
    }
    catch (e) {
        console.log(e)
    }
}
export {getAllAirportCodes}