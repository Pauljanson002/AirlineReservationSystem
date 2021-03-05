import React, {useState,useEffect} from 'react';
import EmployeeMenu from "../core/EmployeeMenu";
import {getAllAirplaneNumbers} from "../../../api-access/airplane-api";
import {readAgeGroupReport, readBookingReport, readPassengerReport} from "../../../api-access/report-api";

export default function AgeGroupReportPage() {
    const [values,setValues] = useState({
        start_date:'',
        end_date:''
    })
    const [report,setReport] = useState([])

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const getReport = (event)=>{

        readBookingReport(values).then((data)=>{
            setReport(data)
        })
    }
    return(
        <div>
            <EmployeeMenu/>
            <div className={"container content"}>
                <div className={"section"}>
                    <div className="field">
                        <label className="label">Start Date</label>
                        <div className={"control"}>
                            <input onChange={handleChange('start_date')} type={"date"}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">End Date</label>
                        <div className={"control"}>
                            <input onChange={handleChange('end_date')} type={"date"}/>
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
                            <th>Type</th>
                            <th>Reg User Type</th>
                            <th>Count</th>
                        </tr>
                        </thead>
                        <tbody>

                        {report.map((r,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{r.type}</td>

                                    <td>{r.reg_user_type}</td>
                                    <td>{r.count}</td>
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