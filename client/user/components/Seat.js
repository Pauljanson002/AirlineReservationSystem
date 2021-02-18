import React, {useState} from 'react'
import "./Seat.css"
export default function Seat({type,id}) {
    const [values,setValues] = useState({
        selected:false,
        disabled:false
    })

    const toggleSelection = (event)=>{
        setValues({...values,selected: !(values.selected)})
    }
    if(values.disabled){
        return(
            <div className="box seat seat-disabled mx-2 my-2"/>
        )
    }
    return(
        <div className={values.selected?"box seat seat-selected mx-2 my-2":"box seat seat-not-selected mx-2 my-2"} onClick={toggleSelection}>
                <p className="is-size-7">
                    {type}
                </p>
        </div>
    )
}