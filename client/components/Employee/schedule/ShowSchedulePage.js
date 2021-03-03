import React, {useState} from 'react'
import EmployeeMenu from "../core/EmployeeMenu";
import {addDelayForFlight, listFlightsByDate} from "../../../api-access/flight-api";
import FlightSearch from "../../user/FlightSchedule/FlightSearch";
import FlighDetailCanvas from "../../user/FlightSchedule/FlighDetailCanvas";


export default function ShowSchedulePage () {

    const [flights,setFlights] = useState([])
    const [extra,setExtra] = useState({progress:false,error:'',message:''})
    const [delay,setDelay] = useState({})
    const changeFlights =(date)=>{
        setExtra({...extra,progress: true})
        setTimeout(()=>{
            listFlightsByDate(date).then((data)=>{
                setFlights(data)
                setExtra({...extra,progress: false})
            })
        },1000)

    }
    const addDelay = (key)=>(event)=>{
       event.preventDefault()
        const query = {
           delay:delay[key],
            flight_id:flights[key].flight_id
        }
        addDelayForFlight(query).then((data)=>{
            if(data.error){
                setExtra({...extra,error: data.error,message: ''})
            }else{
                setExtra({...extra,message: data.message,error: ''})
            }
        })
    }
    const handleDelay = (key)=>(event)=>{
        setDelay({...delay,[key]:event.target.value})
    }
    return(
        <div>
            <EmployeeMenu/>
            <div className={"container content"}>
                <div className={"section"}>
                    <div className={"container"}>
                        <FlightSearch changeFlights={changeFlights}/>
                    </div>
                </div>
                {extra.progress && (
                    <div className={"field"}>
                        <progress className={"progress is-small is-primary"} max="100%" >loading</progress>
                    </div>
                )}
               <div className={"section"}>
                   <div className={"container"}>

                       <table className={"table"}>
                           <thead>
                                <tr>
                                    <th>Flight Id</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Departure</th>
                                    <th>Arrival</th>
                                    <th>Delay</th>
                                    <th>Add</th>
                                </tr>
                           </thead>
                           <tbody>

                           {flights.map((flight,i)=>{
                               return(
                                   <tr key={i}>
                                       <td>{flight.flight_id}</td>

                                       <td>{flight.from_airport}</td>
                                       <td>{flight.to_airport}</td>
                                       <td>{flight.departure_time}</td>
                                       <td>{flight.landing_time}</td>
                                       <td><input type={"text"} onChange={handleDelay(i)}/></td>
                                       <td><button onClick={addDelay(i)}>Add delay</button></td>
                                   </tr>
                               )
                           })}
                           </tbody>
                       </table>
                   </div>
               </div>
                {extra.error && (
                    <div className={"field"}>
                       <div className={"notification is-danger"}>{extra.error}</div>
                    </div>
                )}
                {extra.message && (
                    <div className={"field"}>
                        <div className={"notification is-success"}>{extra.message}</div>
                    </div>
                )}
            </div>


        </div>
    )
}