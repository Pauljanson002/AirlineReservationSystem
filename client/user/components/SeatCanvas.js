import React from 'react'
import Seat from "./Seat";
import "./SeatCanvas.css"

export default function SeatCanvas ({platinum, business, economy}) {
    let platinumRows = Array(platinum).map((n,i)=>{
        return(
            <tr>
                <th>{i}</th>
                <td><Seat type="Platinum" row={i} column="A" /></td>
                <td><Seat type="Platinum" row={i} column="B" /></td>
                <td><Seat type="Platinum" row={i} column="C" /></td>
            </tr>
        )
    })
    let businessRows = Array(business).map((n,i)=>{
        return(
            <tr>
                <th>{platinumRows.length+i}</th>
                <td><Seat type="Business" row={platinumRows.length+i} column="A" /></td>
                <td><Seat type="Business" row={platinumRows.length+i} column="B" /></td>
                <td><Seat type="Business" row={platinumRows.length+i} column="C" /></td>
            </tr>
        )
    })
    let economyRows = Array(economy).map((n,i)=>{
        return(
            <tr>
                <th>{platinumRows.length+businessRows.length+i}</th>
                <td><Seat type="Economy" row={platinumRows.length+businessRows.length+i} column="A" /></td>
                <td><Seat type="Economy" row={platinumRows.length+businessRows.length+i} column="B" /></td>
                <td><Seat type="Economy" row={platinumRows.length+businessRows.length+i} column="C" /></td>
            </tr>
        )
    })
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
                            {platinumRows.map((row,i)=>{
                                return {row}
                            })}
                            {businessRows.map((row,i)=>{
                                return {row}
                            })}
                            {economyRows.map((row,i)=>{
                                return {row}
                            })}
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