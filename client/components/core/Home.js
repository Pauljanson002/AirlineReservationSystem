import React from "react";
import logo from "/client/assets/logo.png"
import "./Home.css"
import {Link} from "react-router-dom";
import RegisterForm from "/client/components/registered_user/registerform";
export default function Home() {
    return(
        <section className="hero is-info is-fullheight">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a  href="#">
                                <img src={logo}  width={200} alt="Logo"/>
                            </a>
                            <span className="navbar-burger burger" >
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        </div>
                        {/*<div id="navbarMenu" className="navbar-menu">*/}
                        {/*    <div className="navbar-end">*/}
                        {/*    <span className="navbar-item">*/}
                        {/*        <a className="button is-white is-outlined" href="#">*/}
                        {/*            <span className="icon">*/}
                        {/*                <i className="fa fa-home"></i>*/}
                        {/*            </span>*/}
                        {/*            <span>Home</span>*/}
                        {/*        </a>*/}
                        {/*    </span>*/}
                        {/*        <span className="navbar-item">*/}
                        {/*        <a className="button is-white is-outlined" href="#">*/}
                        {/*            <span className="icon">*/}
                        {/*                <i className="fa fa-superpowers"></i>*/}
                        {/*            </span>*/}
                        {/*            <span>Examples</span>*/}
                        {/*        </a>*/}
                        {/*    </span>*/}
                        {/*        <span className="navbar-item">*/}
                        {/*        <a className="button is-white is-outlined" href="#">*/}
                        {/*            <span className="icon">*/}
                        {/*                <i className="fa fa-book"></i>*/}
                        {/*            </span>*/}
                        {/*            <span>Documentation</span>*/}
                        {/*        </a>*/}
                        {/*    </span>*/}
                        {/*        <span className="navbar-item">*/}
                        {/*        <a className="button is-white is-outlined"*/}
                        {/*           href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/landing.html">*/}
                        {/*            <span className="icon">*/}
                        {/*                <i className="fa fa-github"></i>*/}
                        {/*            </span>*/}
                        {/*            <span>View Source</span>*/}
                        {/*        </a>*/}
                        {/*    </span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </nav>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-6 is-offset-3">
                        <h1 className="title is-size-1">
                            Welcome to B Airways
                        </h1>
                        <h2 className="subtitle">
                            Fly with us
                        </h2>
                        <div className="box">
                            <div className="columns is-mobile">
                                <div className="column">
                                    <Link to="/flight/schedule">
                                        <button className="button is-large is-primary" >Enter to Platform</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="content">
                                        <h3 className="mb-0">New to our platform</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="columns ">
                                <div className="column">
                                    <Link to="/registered_user/register">
                                        <button className="button is-link">Register as User</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={"home home-footer footer py-0"}>
                <div className={"level"}>
                    <div className={"level-right"}>
                        <div className={"level-item"}>
                           <Link to={"/employee/schedule"}> <button className={"button"}>Admin</button> </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}