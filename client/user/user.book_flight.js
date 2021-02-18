import React from 'react'
import Seat from "./components/Seat";
import SeatCanvas from "./components/SeatCanvas";
import Menu from "../core/Menu";


export default function BookFlightPage () {

    return(
        <div>
            <Menu/>
            <div className="section">
                <div className="container is-fluid is-justify-content-center">
                    <SeatCanvas/>
                </div>
            </div>
        </div>
    )
}