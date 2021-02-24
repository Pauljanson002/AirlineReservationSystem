import React, {useEffect, useState} from 'react'
import Seat from "./components/SeatBooking/Seat";
import SeatCanvas from "./components/SeatBooking/SeatCanvas";
import Menu from "../core/Menu";
import {listFlightSeatCountByFlightId} from "./flight-api";


export default function BookFlightPage ({match}) {
    const [values,setValues] = useState({
        platinum:'',
        business:'',
        economy:'',
    })
    useEffect(()=>{
        listFlightSeatCountByFlightId(match.params.flightId).then(data=>{
            setValues({
                platinum: data.platinum,
                business: data.business,
                economy: data.economy,
            })
        } )
    },[])
    return(
        <div>
            <Menu/>
            <div className="section">
                <div className="container is-fluid is-justify-content-center">
                    <SeatCanvas platinum={values.platinum} business={values.business} economy={values.economy} flight_id={match.params.flightId}/>
                </div>
            </div>
        </div>
    )
}