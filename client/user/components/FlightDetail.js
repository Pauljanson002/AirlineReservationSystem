import React from 'react'
import "./FlightDetail.css"
export default function FlightDetail({airplane_model,from_airport,departure_time,to_airport}) {
    return (
        <div className="container is-fluid is-vcentered my-6">
            <div className="box has-background-info-light has-text-black py-0 my-0 flight-detail-box">
                <div className="columns">
                    <div className="column">
                        {airplane_model}
                    </div>
                    <div className="column">
                       <div className="is-capitalized is-size-2  ">{from_airport}</div>
                        Start time
                    </div>
                    <div className="column">
                        {airplane_model}
                        Duration
                    </div>
                    <div className="column">
                        <div className="is-capitalized is-size-2">{to_airport}</div>
                    </div>
                    <div className="column">
                        price<br/>
                       <button className="button">Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}