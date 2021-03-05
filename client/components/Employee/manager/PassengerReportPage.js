import React, {useState,useEffect} from 'react';
import EmployeeMenu from "../core/EmployeeMenu";
import {getAllAirportCodes} from "../../../api-access/airport-api";
import {readPassengerReport} from "../../../api-access/report-api";

export default function AgeGroupReportPage() {
    const [airport,setAirport] = useState([])
    const [values,setValues] = useState({
        destination:'',
        start_date:'',
        end_date:''
    })
    const [report,setReport] = useState([])
    useEffect(()=>{
        getAllAirportCodes().then((data)=>{
            setAirport(data)
            setValues({...values,destination: data[0]})
        })
    },[])
    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const getReport = (event)=>{
        readPassengerReport(values).then((data)=>{
            setReport(data)
        })
    }
    return(
        <div>
            <EmployeeMenu/>
            <div className={"container content"}>
                <div className={"section"}>
                    <div className="field">
                        <label className="label">Airport</label>
                        <div className="control">
                            <div className="select">
                                <select onChange={handleChange('destination')}>
                                    {airport.map((item,i)=>{
                                        return (<option key={i}>{item}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Start Date</label>
                        <div className="control">
                            <input className={"input"} type={"date"} onChange={handleChange('start_date')}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">End Date</label>
                        <div className="control">
                            <input className={"input"} type={"date"} onChange={handleChange('end_date')}/>
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
                            <th>Count</th>
                        </tr>
                        </thead>
                        <tbody>

                        {report.map((r,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{r.get_passenger_count_to_destination}</td>
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