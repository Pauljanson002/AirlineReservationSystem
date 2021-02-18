import React from 'react'
import "./FlightDetail.css"
export default function FlightDetail() {
    return (
        <div className="container is-fluid is-vcentered">
            <div className="box has-background-info-light has-text-black py-0 my-0 flight-detail-box">
                <div className="columns">
                    <div className="column">
                        Flight type
                    </div>
                    <div className="column">
                        From airport <br/>
                        Start time
                    </div>
                    <div className="column">
                        Fligh model
                        Duration
                    </div>
                    <div className="column">
                        End airport
                    </div>
                    <div className="column">
                        price
                        Book button
                    </div>
                </div>
            </div>

        </div>
    )
}