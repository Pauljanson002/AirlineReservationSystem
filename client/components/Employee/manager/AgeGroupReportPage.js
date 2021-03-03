import React, {useState,useEffect} from 'react';
import EmployeeMenu from "../core/EmployeeMenu";
import {getAllAirplaneNumbers} from "../../../api-access/airplane-api";
import {readAgeGroupReport} from "../../../api-access/report-api";

export default function AgeGroupReportPage() {
    const [airplane,setAirplane] = useState([])
    const [values,setValues] = useState({
        airplane_num:''
    })
    const [report,setReport] = useState([])
    useEffect(()=>{
        getAllAirplaneNumbers().then((data)=>{
            setAirplane(data)
            setValues({...values,airplane_num: data[0]})
        })
    },[])
    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const getReport = (event)=>{
        readAgeGroupReport(values.airplane_num).then((data)=>{
            setReport(data)
        })
    }
    return(
        <div>
            <EmployeeMenu/>
            <div className={"container content"}>
                <div className={"section"}>
                    <div className="field">
                        <label className="label">Airplane Num</label>
                        <div className="control">
                            <div className="select">
                                <select onChange={handleChange('airplane_num')}>
                                    {airplane.map((item,i)=>{
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
                            <th>Passenger Name</th>
                            <th>Passport Num</th>
                            <th>Age Group</th>
                        </tr>
                        </thead>
                        <tbody>

                        {report.map((r,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{r.passenger_name}</td>

                                    <td>{r.passport_num}</td>
                                    <td>{r.age_divider}</td>
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