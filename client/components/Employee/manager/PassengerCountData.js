import React, {useState,useEffect} from 'react';
import EmployeeMenu from "../core/EmployeeMenu";
import {getAllAirportCodes} from "../../../api-access/airport-api";
import {readPassengerCountData, readPassengerReport} from "../../../api-access/report-api";

export default function PassengerCountData() {
    const [airport,setAirport] = useState([])
    const [values,setValues] = useState({
       from_airport:'',
       to_airport:''
    })
    const [report,setReport] = useState([])
    useEffect(()=>{
        getAllAirportCodes().then((data)=>{
            setAirport(data)
            setValues({...values,from_airport: data[0],to_airport:data[1]})
        })
    },[])
    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const getReport = (event)=>{
        readPassengerCountData(values).then((data)=>{
            setReport(data)
        })
    }
    return(
        <div>
            <EmployeeMenu/>
            <div className={"container content"}>
                <div className={"section"}>
                    <div className="field">
                        <label className="label">From Airport</label>
                        <div className="control">
                            <div className="select">
                                <select onChange={handleChange('from_airport')}>
                                    {airport.map((item,i)=>{
                                        return (<option key={i}>{item}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">To Airport</label>
                        <div className="control">
                            <div className="select">
                                <select onChange={handleChange('to_airport')}>
                                    {airport.map((item,i)=>{
                                        if(i==1) return (<option key={i} selected>{item}</option> )
                                        return (<option key={i}>{item}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <div className={"control"}>
                            <button className={"button"} onClick={getReport}>Go</button>
                        </div>
                    </div>
                </div>
                <div className={"section"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Flight Id</th>
                            <th>Date</th>
                            <th>Departure Time</th>
                            <th>Landing Time</th>
                            <th>Seats</th>
                            <th>Count</th>
                            <th>To Airport</th>
                            <th>From Airport</th>
                        </tr>
                        </thead>
                        <tbody>

                        {report.map((r,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{r.flight_id}</td>
                                    <td>{r.date}</td>
                                    <td>{r.departure_time}</td>
                                    <td>{r.landing_time}</td>
                                    <td>{r.seats}</td>
                                    <td>{r.count}</td>
                                    <td>{r.from_airport}</td>
                                    <td>{r.to_airport}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}