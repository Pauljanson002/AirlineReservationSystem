import React from 'react'
import FlightDetail from "./FlightDetail";
export default function FlightDetailCanvas() {

    return(
        <div>
            <FlightDetail airplane_model="Boeing 747 " departure_time="13:00" to_airport="CMB" from_airport="DUB" />
            <FlightDetail airplane_model="Boeing 747 " departure_time="13:00" to_airport="CMB" from_airport="DUB" />
            <FlightDetail airplane_model="Boeing 747 " departure_time="13:00" to_airport="CMB" from_airport="DUB" />
        </div>
    )
}