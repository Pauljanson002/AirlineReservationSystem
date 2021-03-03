const flightDataStore = {
    addFlights:(flights)=>{
        let datastore = []
        if(typeof window !== 'undefined'){
            if(sessionStorage.getItem('flightDataStore')){
                datastore = sessionStorage.getItem('flightDataStore')
            }
            flights.map((flight,i)=>{
                datastore.push(flight)
            })
            sessionStorage.setItem('flightDataStore',JSON.stringify(datastore))
        }
    },
    getFlights:()=>{
        let datastore = []
        if(typeof window !== 'undefined'){
            if(sessionStorage.getItem('flightDataStore')){
                datastore = sessionStorage.getItem('flightDataStore')
            }
            return datastore
        }
    }
}
