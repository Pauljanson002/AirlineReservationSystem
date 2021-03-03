import React, {useEffect, useState} from 'react'
import {listFlightsByDate} from "../../../api-access/flight-api";


const FlightSearch = function ({changeFlights}) {
    const [data,setData]  = useState({
        date:new Date().toISOString().substring(0,10),
    })
    useEffect(()=>{
        changeFlights(data.date)
    },[])
    const clickSubmit = ()=>{
         changeFlights(data.date)
    }
    const handleChange = name => event =>{
        setData({...data,[name]:event.target.value})
    }
    return(
        <div>
            <div className="box  has-background-grey-light mt-0">
                <form onSubmit={event => event.preventDefault()}>
                    <div className="field">
                        <label className="is-size-5">Date of travel</label>
                        <div className="control">
                            <input className="input" type="date" value={data.date} onChange={handleChange('date')} min={data.date}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-light" onClick={clickSubmit}>Check</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FlightSearch