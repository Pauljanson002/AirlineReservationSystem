import React, {useState} from 'react'
import Menu from "../core/Menu";
import FlightSearch from "./components/FlightSchedule/FlightSearch";
import FlighDetailCanvas from "./components/FlightSchedule/FlighDetailCanvas";
import {listFlightsByDate} from "./flight-api";

export default function FlightSchedulePage() {
    const [flights,setFlights] = useState([])
    const changeFlights =(date)=>{
        listFlightsByDate(date).then((data)=>{
            setFlights(data)
        })
    }
    return(
        <div>
            <Menu/>
            <div className="container is-fluid">
                <div className="section">
                    <FlightSearch changeFlights ={changeFlights} />
                </div>
                <div className="section" >
                    <FlighDetailCanvas flights={flights}/>
                </div>
            </div>
        </div>
    )
}