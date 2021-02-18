import React from 'react'
import Seat from "./Seat";

export default function SeatRow ({type,amount}) {
    let rows = []
    for(let i = 0;i<amount;i++){
        rows.push(
            <td><Seat type={type}/></td>
        )
    }
    return({

    })
}