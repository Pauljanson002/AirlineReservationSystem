import React from 'react'
import EmployeeMenu from "./EmployeeMenu";


export default function EmployeeHomePage () {
    return(
        <div>
            <EmployeeMenu/>
            <div className={"content"}>
                <div>
                   <h1>Welcome</h1>
                </div>
            </div>
        </div>
    )
}