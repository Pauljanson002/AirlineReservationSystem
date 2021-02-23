import React from 'react'
import Seat from "./components/SeatBooking/Seat";
import SeatCanvas from "./components/SeatBooking/SeatCanvas";
import Menu from "../core/Menu";


export default function BookFlightPage ({match}) {

    return(
        <div>
            <Menu/>
            <div className="section">
                <div className="container is-fluid is-justify-content-center">
                    <SeatCanvas platinum={3} business={3} economy={3} flight_id={match.params.flightId}/>
                </div>
            </div>
        </div>
    )
}