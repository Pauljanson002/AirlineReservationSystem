const BookedSeatDataStore = {
   setSeats:(flight_id,seats) =>{
      let bookedSeatsDS = {}
      if(typeof window !== "undefined"){
         if(sessionStorage.getItem('bookedSeatsDS')){
            bookedSeatsDS =  JSON.parse(sessionStorage.getItem('bookedSeatsDS'))
         }
         bookedSeatsDS[flight_id] = seats;
         sessionStorage.setItem('bookedSeatsDS',JSON.stringify(bookedSeatsDS))
      }
   },
   checkSeat:(flight_id,row,column)=>{
      if(row<10){
         row = '0'+row;
      }
      let bookedSeatsDS = {}
      if(typeof window !== "undefined"){
         if(sessionStorage.getItem('bookedSeatsDS')){
            bookedSeatsDS = JSON.parse(sessionStorage.getItem('bookedSeatsDS'))
         }
         let seatcode = column+row;
         // console.log(seatcode)
         // console.log(bookedSeatsDS[flight_id])
         if(bookedSeatsDS[flight_id] && bookedSeatsDS[flight_id].includes(seatcode)){
            return true
         }
         else{
            return false
         }
      }
   },
   checkDS:(flight_id)=>{
      if(typeof window!=="undefined"){
         if(sessionStorage.getItem('bookedSeatsDS')){
            let bookedSeatsDS = JSON.parse(sessionStorage.getItem('bookedSeatsDS'))
            if(bookedSeatsDS[flight_id]) return true
            else return false
         }
      }

   }
}
export default BookedSeatDataStore