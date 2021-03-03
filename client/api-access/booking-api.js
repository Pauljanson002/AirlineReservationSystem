const listBookingWithUserId = async (user_id)=>{
    try{
        let response = await fetch('/api/booking/list/'+user_id,{
            method:'GET'
        });
        return await response.json()
    }
    catch (e) {
       console.log(e)
    }
}

const confirmBookingWithCode = async (booking_code)=>{
    try{
        let response = await fetch('/api/booking/confirm/'+booking_code,{
            method:'GET'
        });
        return await response.json()
    }
    catch (e) {
       console.log(e)
    }
}
const cancelBookingWithCode = async (booking_code)=>{
    try{
        let response = await fetch('/api/booking/cancel/'+booking_code,{
            method:'GET'
        });
        return await response.json()
    }
    catch (e) {
        console.log(e)
    }
}
export  {listBookingWithUserId,confirmBookingWithCode,cancelBookingWithCode}