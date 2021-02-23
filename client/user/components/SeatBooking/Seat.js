import React, {useEffect, useState} from 'react'
import selectedSeatDataStore from '../SelectedSeatDataStore'
import "./Seat.css"
export default function Seat({type,column,row}) {
    const [values,setValues] = useState({
        selected:false,
        disabled:false,
    })
    useEffect(()=>{
        if(selectedSeatDataStore.checkSeat(column,row)){
            setValues({...values,["selected"]:true})
        }
    },[])

    const toggleSelection = (event)=>{
        setValues({...values,selected: !(values.selected)})
        if(!values.selected){
            selectedSeatDataStore.addSeat({
                column:column,
                row:row,
                type:type,
                passenger_name:'',
                passenger_age:'',
                passenger_passport_no:''
            })
        }
        else {
            selectedSeatDataStore.removeSeat(column,row)
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