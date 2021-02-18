import React,{useState} from 'react'


const FlightSearch = function () {
    const [data,setData]  = useState({
        date:''
    })
    const clickSubmit = ()=>{
        console.log(data)
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
                            <input className="input" type="date" value={data.date} onChange={handleChange('date')}/>
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