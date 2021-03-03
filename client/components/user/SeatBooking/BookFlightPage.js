import React, {useEffect, useState} from 'react'
import Seat from "./Seat";
import SeatCanvas from "./SeatCanvas";
import Menu from "../../core/Menu";
import {getClosedSeatsByFlightId, listFlightSeatCountByFlightId} from "../../../api-access/flight-api";
import BookedSeatDataStore from "../../../data-stores/BookedSeatDataStore";


export default function BookFlightPage ({match}) {
    const [values,setValues] = useState({
        platinum:'',
        business:'',
        economy:'',
    })
    useEffect(()=>{
        listFlightSeatCountByFlightId(match.params.flightId).then(data=>{
            setValues({
                platinum: data.platinum_rows,
                business: data.business_rows,
                economy: data.economy_rows,
            })
        } )
    },[])
    return(
        <div>
            <Menu/>
            <div className="section">
                <div className="container is-fluid is-justify-content-center">
                    <SeatCanvas platinum={values.platinum} business={values.business} economy={values.economy} flight_id={match.params.flightId} />
                </div>
            </div>
        </div>
    )
}