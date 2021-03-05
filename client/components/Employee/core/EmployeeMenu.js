import React from 'react'
import logo from '/client/assets/logo.png'
import {Link, withRouter} from "react-router-dom";
import auth from "./../auth/auth-helper";
const EmployeeMenu = withRouter(({history})=> {
    const signoutFunction = ()=>{
        auth.clearEmployee(()=>history.push('/'))
        sessionStorage.clear()
    }
    return(
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to={"/"}>
                    <img src={logo}/>
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to={"/employee/schedule"}>
                        Schedule Flights
                    </Link>
                    <Link className="navbar-item" to={"/employee/flight/schedule"}>
                        Show Flights
                    </Link>
                    { auth.isAuthenticated().employee.occupation === 'manager' && <div className="navbar-item has-dropdown is-hoverable">
                        <a href={"#"} className="navbar-link">
                            Reports
                        </a>

                        <div className="navbar-dropdown">
                            <Link className="navbar-item" to={"/employee/report/age-group-report"}>
                                FlightReportByAgeGroup
                            </Link>
                            <Link className="navbar-item" to={"/employee/report/passenger-report/"}>
                                PassengerReportByDestination
                            </Link>
                            <Link className="navbar-item" to={"/employee/report/booking-report/"}>
                                BookingReportByPassengerType
                            </Link>
                                <Link className="navbar-item" to={"/employee/report/passenger-count-data/"}>
                                    PassengerCountData
                                </Link>
                            <Link className="navbar-item" to={"/employee/report/revenue-report/"}>
                                    RevenueReport
                            </Link>
                        </div>
                    </div>}
                </div>




                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-primary" onClick={signoutFunction}>
                                <strong>Sign out</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
})

export default EmployeeMenu