const selectedSeatDataStore = {
    addSeat:(flight_id,seat)=>{
        let selectedSeatsDS = {[flight_id]:{}}
        if(typeof window !== "undefined"){
            if(sessionStorage.getItem('selectedSeatsDS')){
                selectedSeatsDS = JSON.parse(sessionStorage.getItem('selectedSeatsDS'))
            }
            if(selectedSeatsDS[flight_id] === undefined) selectedSeatsDS[flight_id]= {}
            selectedSeatsDS[flight_id][`${seat.column}${seat.row}`] = seat
            sessionStorage.setItem('selectedSeatsDS',JSON.stringify(selectedSeatsDS))
        }
    },
    removeSeat:(flight_id,column,row)=>{
        let selectedSeatsDS ={[flight_id]:{}}
        if(typeof window !== 'undefined'){
            if(sessionStorage.getItem('selectedSeatsDS')){
                selectedSeatsDS = JSON.parse(sessionStorage.getItem('selectedSeatsDS'))
            }
            if(selectedSeatsDS[flight_id] !== undefined) {
                delete selectedSeatsDS[flight_id][`${column}${row}`]
                sessionStorage.setItem('selectedSeatsDS',JSON.stringify(selectedSeatsDS))
            }
        }
    },
    checkSeat:(flight_id,column,row)=>{
        let selectedSeatsDS = {}
        if(typeof window !== 'undefined'){
            if(sessionStorage.getItem('selectedSeatsDS')){
                selectedSeatsDS = JSON.parse(sessionStorage.getItem('selectedSeatsDS'))
            }
            if(selectedSeatsDS[flight_id] !== undefined && selectedSeatsDS[flight_id][`${column}${row}`] !== undefined){
                return true
            }
            else {
                return false
            }
        }
        else{
            return false
        }
    },
    getSeats:(flight_id)=>{
        let selectedSeatsDS = {}
        if(typeof window !== "undefined"){
            if(sessionStorage.getItem('selectedSeatsDS')){
                selectedSeatsDS = JSON.parse(sessionStorage.getItem('selectedSeatsDS'))
            }
        }
        if(selectedSeatsDS[flight_id]){
            return selectedSeatsDS[flight_id]
        }
        else{
            selectedSeatsDS[flight_id] = {}
            return selectedSeatsDS[flight_id]
        }
    },
    setSeats:(flight_id,seats)=>{
        let selectedSeatsDS = {}
        if(typeof window !== "undefined"){
            if(sessionStorage.getItem('selectedSeatsDS')){
                selectedSeatsDS =  JSON.parse(sessionStorage.getItem('selectedSeatsDS'))
            }
            selectedSeatsDS[flight_id] = seats;
            sessionStorage.setItem('selectedSeatsDS',JSON.stringify(selectedSeatsDS))

        }
    },
    dropSeats:(flight_id)=>{
        let selectedSeatsDS = {}
        if(typeof window!=="undefined"){
            if(sessionStorage.getItem('selectedSeatsDS')){
                selectedSeatsDS = JSON.parse(sessionStorage.getItem('selectedSeatsDS'))
            }
            delete selectedSeatsDS[flight_id];
            sessionStorage.setItem('selectedSeatsDS',JSON.stringify(selectedSeatsDS))
        }
    }
}
export default selectedSeatDataStore