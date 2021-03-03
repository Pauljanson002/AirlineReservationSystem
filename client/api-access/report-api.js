const readAgeGroupReport = async (airplane_num)=>{
    try{
        let response = await fetch('/api/report/age-group-report/'+airplane_num,{
            method:'GET'
        });
        return await response.json()
    }
    catch (e) {
        console.log(e)
    }
}
const readPassengerReport = async (query)=>{
    try{
        let response = await fetch('/api/report/get-passenger-report-by-dest/',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(query)
        });
        return await response.json()
    }
    catch (e) {
        console.log(e)
    }
}

const readBookingReport = async (query)=>{
    try{
        let response = await fetch('/api/report/get-booking-report/',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(query)
        });
        return await response.json()
    }
    catch (e) {
        console.log(e)
    }
}
const readPassengerCountData = async (query)=>{
    try{
        let response = await fetch("/api/report/get-passenger-counts-report/",{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(query)
        });
        return await response.json()
    }
    catch (e) {
        console.log(e)
    }
}

const readRevenueReport = async ()=>{
    try{
        let response = await fetch('/api/report/get-revenue-report/',{
            method:'GET'
        });
        return await response.json()
    }
    catch (e) {
        console.log(e)
    }
}

//
// const confirmBookingWithCode = async (booking_code)=>{
//     try{
//         let response = await fetch('/api/booking/confirm/'+booking_code,{
//             method:'GET'
//         });
//         return await response.json()
//     }
//     catch (e) {
//         console.log(e)
//     }
// }
// const cancelBookingWithCode = async (booking_code)=>{
//     try{
//         let response = await fetch('/api/booking/cancel/'+booking_code,{
//             method:'GET'
//         });
//         return await response.json()
//     }
//     catch (e) {
//         console.log(e)
//     }
// }
export  {readAgeGroupReport,readPassengerReport,readBookingReport,readPassengerCountData,readRevenueReport}