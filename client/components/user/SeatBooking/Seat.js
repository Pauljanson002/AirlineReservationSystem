import React, {useEffect, useLayoutEffect, useState} from 'react'
import selectedSeatDataStore from '../../../data-stores/SelectedSeatDataStore'
import "./Seat.css"
import BookedSeatDataStore from "../../../data-stores/BookedSeatDataStore";
export default function Seat({flight_id,type,column,row,booked_seats}) {
    const [values,setValues] = useState({
        selected:false,
        disabled:false,
    })
    useEffect(()=>{
        let seatcode = column+row


        if(booked_seats.includes(seatcode)){
            setValues({...values,['disabled']:true})
        }
    },[booked_seats])
    useEffect(()=>{
        if(selectedSeatDataStore.checkSeat(flight_id,column,row)){
            setValues({...values,["selected"]:true})
        }

    },[])

    const toggleSelection = (event)=>{
        setValues({...values,selected: !(values.selected)})
        if(!values.selected){
            selectedSeatDataStore.addSeat(flight_id,{
                column:column,
                row:row,
                type:type,
                price:'',
                passenger_name:'',
                passenger_dob:'',
                passenger_passport_no:''
            })
        }
        else {
            selectedSeatDataStore.removeSeat(flight_id,column,row)
        }

    }
    if(values.disabled){
        return(
            <div className="box seat seat-disabled mx-2 my-2"/>
        )
    }
    return(
        <div className={values.selected?"box seat seat-selected mx-2 my-2":"box seat seat-not-selected mx-2 my-2"} onClick={toggleSelection}>
                <p  className="is-size-7 seat">
                    {type}
                </p>
        </div>
    )
}