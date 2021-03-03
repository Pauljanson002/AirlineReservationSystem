import React, {useState} from 'react'
import Menu from "../../core/Menu";
import FlightSearch from "./FlightSearch";
import FlighDetailCanvas from "./FlighDetailCanvas";
import {listFlightsByDate} from "../../../api-access/flight-api";

export default function FlightSchedulePage() {
    const [flights,setFlights] = useState([])
    const [data,setData] = useState({progress:false})
    const changeFlights =(date)=>{
        setData({progress: true})
        setTimeout(()=>{
            listFlightsByDate(date).then((data)=>{
                setFlights(data)
                setData({progress: false})
            })
        },1000)

    }
    return(
        <div>
            <Menu/>
            <div className="container is-fluid">
                <div className="section">
                    <FlightSearch changeFlights ={changeFlights} />
                </div>
                {data.progress && (<div className={"field"}>
                    <progress className={"progress is-small is-primary"} max="100%" >loading</progress>
                </div>)}
                <div className="section" >
                    <FlighDetailCanvas flights={flights}/>
                </div>
            </div>
        </div>
    )
}