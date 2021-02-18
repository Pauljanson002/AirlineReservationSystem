import React from 'react'
import Menu from "../core/Menu";
import FlightSearch from "./components/FlightSearch";
import FlighDetailCanvas from "./components/FlighDetailCanvas";

export default function () {
    return(
        <div>
            <Menu/>
            <div className="container is-fluid">
                <div className="section">
                    <FlightSearch/>
                </div>
                <div className="section">
                    <FlighDetailCanvas/>
                </div>
            </div>
        </div>
    )
}