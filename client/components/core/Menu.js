import React from 'react'
import logo from '/client/assets/logo.png'
import {Link, withRouter} from "react-router-dom";
import auth from "../user/auth/auth-helper";
const Menu = withRouter(({history})=> {
    const signoutFunction = ()=>{
        auth.clearCurrentUser(()=>history.push('/'))
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
                    <Link className="navbar-item" to={"/flight/schedule"}>
                        Book Flights
                    </Link>
                    {auth.isAuthenticated().user.type !=='guest' &&
                    <Link className="navbar-item" to={"/registered_user/profile"}>
                        Profile
                    </Link>}
                    <Link className="navbar-item" to={"/flight/booking"}>
                        Bookings
                    </Link>


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

export default Menu