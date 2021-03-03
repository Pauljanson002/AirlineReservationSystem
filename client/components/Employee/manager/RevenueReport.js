import React, {useState,useEffect} from 'react';
import EmployeeMenu from "../core/EmployeeMenu";
import {getAllAirplaneNumbers} from "../../../api-access/airplane-api";
import {
    readAgeGroupReport,
    readBookingReport,
    readPassengerReport,
    readRevenueReport
} from "../../../api-access/report-api";

export default function AgeGroupReportPage() {

    const [report,setReport] = useState([])

    useEffect(()=>{
        readRevenueReport().then((data)=>{
            setReport(data)
        })
    },[])
    return(
        <div>
            <EmployeeMenu/>
            <div className={"container content"}>
                <div className={"section"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Model Name</th>
                            <th>Sum</th>
                        </tr>
                        </thead>
                        <tbody>

                        {report.map((r,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{r.model_name}</td>
                                    <td>{r.sum}</td>
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