import React from 'react'
import Seat from "./Seat";
import "./SeatCanvas.css"

export default function SeatCanvas () {

    return(
        <div className="container is-fluid">
            <div className="columns">
                <div className="column is-narrow">
                   <table className="table">
                       <thead>
                            <tr>
                                <th>#</th>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                            </tr>
                       </thead>
                       <tbody>
                            <tr>
                                <th >1</th>
                                <td><Seat type="Gold"/></td>
                                <td><Seat type="Business"/></td>
                                <td><Seat type="Economy"/></td>
                            </tr>
                       </tbody>
                   </table>
                </div>
                <div className="column is-narrow">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>D</th>
                            <th>E</th>
                            <th>F</th>
                            <th>#</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><Seat/></td>
                            <td><Seat/></td>
                            <td><Seat/></td>
                            <th>1</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}