import React from 'react'
import "./FlightDetail.css"
import {Link} from "react-router-dom";
export default function FlightDetail({airplane_model,from_airport,departure_time,to_airport,arrival_time,duration,flight_id}) {
    return (
        <div className="container is-fluid is-vcentered my-6">
            <div className="box has-background-info-light has-text-black py-0 my-0 flight-detail-box">
                <div className="columns">
                    <div className="column">
                        <span className="is-capitalized">{airplane_model}</span>
                    </div>
                    <div className="column">
                       <div className="is-capitalized is-size-2  ">{from_airport}</div>
                        {departure_time}
                    </div>
                    <div className="column">
                        {duration}
                    </div>
                    <div className="column">
                        <div className="is-capitalized is-size-2">{to_airport}</div>
                        {arrival_time}
                    </div>
                    <div className="column">
                        <Link to={"/flight/book/"+flight_id}>
                            <button className="button">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}