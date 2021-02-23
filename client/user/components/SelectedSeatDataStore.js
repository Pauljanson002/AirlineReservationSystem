const selectedSeatDataStore = {
    addSeat:(seat)=>{
        let datastore = {}
        if(typeof window !== "undefined"){
            if(localStorage.getItem('datastore')){
                datastore = JSON.parse(localStorage.getItem('datastore'))
            }
            datastore[`${seat.column}${seat.row}`] = seat
            localStorage.setItem('datastore',JSON.stringify(datastore))
        }
    },
    removeSeat:(column,row)=>{
        let datastore ={}
        if(typeof window !== 'undefined'){
            if(localStorage.getItem('datastore')){
                datastore = JSON.parse(localStorage.getItem('datastore'))
            }
            delete datastore[`${column}${row}`]
            localStorage.setItem('datastore',JSON.stringify(datastore))
        }
    },
    checkSeat:(column,row)=>{
        let datastore = {}
        if(typeof window !== 'undefined'){
            if(localStorage.getItem('datastore')){
                datastore = JSON.parse(localStorage.getItem('datastore'))
            }
            if(datastore[`${column}${row}`] !== undefined){
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
    getSeats:()=>{
        let datastore = {}
        if(typeof window !== "undefined"){
            if(localStorage.getItem('datastore')){
                datastore = JSON.parse(localStorage.getItem('datastore'))
            }
        }
        return datastore
    }
}
export default selectedSeatDataStore