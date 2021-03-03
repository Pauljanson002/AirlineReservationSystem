import React, {useEffect, useLayoutEffect, useState} from "react";
import {Redirect} from "react-router";
import _ from 'lodash'
import {Link} from "react-router-dom";
import auth from "../auth/auth-helper";
import EmployeeMenu from "./../core/EmployeeMenu";
import {getAllAirportCodes} from "../../../api-access/airport-api";
import {getAllAirplaneNumbers} from "../../../api-access/airplane-api";
import {createFlight} from "../../../api-access/flight-api";
const ScheduleFlightPage = () => {
    const [values, setValues] = useState({
        route_id: "",
        from_airport:"",
        to_airport:"",
        airplane_num:"",
        date: "",
        departure_time:"",
        scheduled_by: "",
        error:'',
        redirect:false,
        loading:false
    });
    const [airportCodes,setAirportCodes] = useState([])
    const [airplaneNumbers,setAirplaneNumbers] = useState([])
    useLayoutEffect(()=>{
        getAllAirportCodes().then((airportCodes)=>{
            setAirportCodes(airportCodes)
            getAllAirplaneNumbers().then((airplaneNumbers)=>{
                setAirplaneNumbers(airplaneNumbers)
                setValues({...values,["airplane_num"]:airplaneNumbers[0],["from_airport"]:airportCodes[0],["to_airport"]:airportCodes[1]})
            })
        })


    },[])
    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const handleSubmit = (event)=>{
        event.preventDefault()
        setValues({...values,loading: true})
        const query = {
            from_airport:values.from_airport||undefined,
            to_airport :values.to_airport||undefined,
            airplane_num: values.airplane_num||undefined,
            date:values.date||undefined,
            departure_time:values.departure_time||undefined,
            scheduled_by : auth.isAuthenticated().employee.id||undefined,
        }
        createFlight(query).then((data)=>{
            if(data.error){
                setValues({...values,error: data.error,loading: false})
            }else {
                setValues({...values,error: '',loading: false,redirect: true})
            }
        })
        // const flight = {
        //     route_id: values.route_id,
        //     airplane_num:values.airplane_num,
        //     date: values.date,
        //     departure_time:values.departure_time,
        //     scheduled_by: auth.isAuthenticated().id ,
        // }
        // create(user).then((data)=>{
        //     if(data.error){
        //         setValues({...values,error:data.error})
        //     }else{
        //         setValues({...values,error: '',redirect:true})
        //     }
        // })

    }
    if(values.redirect){
        return (
            <Redirect to="/"/>
        )
    }
    return (
        <div>
            <EmployeeMenu/>
        <div className="container is-fluid">
            <div className="box mt-0">
                <form className="form pt-1" onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">From</label>
                        <div className="control">
                            <div className={"select"}>
                                <select onChange={handleChange('from_airport')}>
                                    {airportCodes.map((code,i)=>{
                                        return (<option key={i}>{code}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">To</label>
                        <div className="control">
                            <div className={"select"}>
                                <select onChange={handleChange('to_airport')}>
                                    {airportCodes.map((code,i)=>{
                                        if(i==1) return (<option key={i} selected>{code}</option> )
                                        return (<option key={i}>{code}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Airplane Number</label>
                        <div className="control">
                            <div className={"select"}>
                                <select onChange={handleChange('airplane_number')}>
                                    {airplaneNumbers.map((code,i)=>{
                                        return (<option key={i}>{code}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Date</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                required
                                className="input"
                                type="date"
                                onChange={handleChange('date')} min={new Date().toISOString().substring(0,10)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Departure Time</label>
                        <div className="control ">
                            <input
                                required
                                className="input"
                                type="time"
                                onChange={handleChange('departure_time')}
                            />
                        </div>
                    </div>
                    {values.loading &&(
                        <div>
                            <progress className={"progress is-small is-primary"} max="100%" >loading</progress>
                        </div>
                    )}
                    {values.error && (
                        <div className="notification is-danger">
                            {values.error}
                        </div>
                    )}

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" type="submit">Submit</button>
                        </div>
                        <div className="control">
                            <Link to="/">
                                <button className="button is-link is-light">Cancel</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};
export default ScheduleFlightPage