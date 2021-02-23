import React, {useEffect, useState} from 'react'
import Seat from "./Seat";
import "./SeatCanvas.css"
import selectedSeatDataStore from "../SelectedSeatDataStore";

export default function SeatCanvas ({platinum, business, economy,flight_id}) {
    const [values,setValues] = useState({
        selectedSeats:{}
    })
    useEffect(()=>{
        setValues({
            selectedSeats:selectedSeatDataStore.getSeats()
        })
    },[])
    const seatClicked = ()=>{
        setValues({
            selectedSeats:selectedSeatDataStore.getSeats()
        })
    }
    let platinumRows = [...Array(platinum)].map((n,i)=>{
        return(
            <tr key={i+1}>
                <th>{i+1}</th>
                <td><Seat type="Platinum" row={i+1} column="A" /></td>
                <td><Seat type="Platinum" row={i+1} column="B" /></td>
                <td><Seat type="Platinum" row={i+1} column="C" /></td>
            </tr>
        )
    })
    let platinumRightRows = [...Array(platinum)].map((n,i)=>{
        return(
            <tr key={i+1}>

                <td><Seat type="Platinum" row={i+1} column="D" /></td>
                <td><Seat type="Platinum" row={i+1} column="E" /></td>
                <td><Seat type="Platinum" row={i+1} column="F" /></td>
                <th>{i+1}</th>
            </tr>
        )
    })
    let businessRows = [...Array(business)].map((n,i)=>{
        return(
            <tr key={platinumRows.length+i+1}>
                <th>{platinumRows.length+i+1}</th>
                <td><Seat type="Business" row={platinumRows.length+i+1} column="A" /></td>
                <td><Seat type="Business" row={platinumRows.length+i+1} column="B" /></td>
                <td><Seat type="Business" row={platinumRows.length+i+1} column="C" /></td>
            </tr>
        )
    })

    let businessRightRows = [...Array(business)].map((n,i)=>{
        return(
            <tr key={platinumRows.length+i+1}>

                <td><Seat type="Business" row={platinumRows.length+i+1} column="D" /></td>
                <td><Seat type="Business" row={platinumRows.length+i+1} column="E" /></td>
                <td><Seat type="Business" row={platinumRows.length+i+1} column="F" /></td>
                <th>{platinumRows.length+i+1}</th>
            </tr>
        )
    })
    let economyRows = [...Array(economy)].map((n,i)=>{
        return(
            <tr key={platinumRows.length+businessRows.length+i+1}>
                <th>{platinumRows.length+businessRows.length+i+1}</th>
                <td><Seat type="Economy" row={platinumRows.length+businessRows.length+i+1} column="A" /></td>
                <td><Seat type="Economy" row={platinumRows.length+businessRows.length+i+1} column="B" /></td>
                <td><Seat type="Economy" row={platinumRows.length+businessRows.length+i+1} column="C" /></td>
            </tr>
        )
    })
    let economyRightRows = [...Array(economy)].map((n,i)=>{
        return(
            <tr key={platinumRows.length+businessRows.length+i+1}>

                <td><Seat type="Economy" row={platinumRows.length+businessRows.length+i+1} column="D" /></td>
                <td><Seat type="Economy" row={platinumRows.length+businessRows.length+i+1} column="E" /></td>
                <td><Seat type="Economy" row={platinumRows.length+businessRows.length+i+1} column="F" /></td>
                <th>{platinumRows.length+businessRows.length+i+1}</th>
            </tr>
        )
    })
    return(
        <div className="container is-fluid" onClick={seatClicked}>
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
                                return row
                            })}
                            {businessRows.map((row,i)=>{
                                return row
                            })}
                            {economyRows.map((row,i)=>{
                                return row
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
                        {platinumRightRows.map((row,i)=>{
                            return row
                        })}
                        {businessRightRows.map((row,i)=>{
                            return row
                        })}
                        {economyRightRows.map((row,i)=>{
                            return row
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="column">
                   <div className="box has-background-success-light booking-menu content">
                       <h1>Booking Menu for Flight : {flight_id} </h1>
                       <h6 className="seat-subtitle">Selected seats </h6>
                       <ul>
                           {Object.keys(values.selectedSeats).map((seat,i)=>{
                               return <li  key={i}>{seat}</li>
                           })}
                       </ul>
                   </div>
                </div>
            </div>
        </div>
    )
}