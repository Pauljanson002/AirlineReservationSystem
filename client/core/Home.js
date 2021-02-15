import React from "react";
import logo from "../assets/logo.png"
import "./Home.css"
import {Link} from "react-router-dom";
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
                            Traveling the world makes dream come true
                        </h2>
                        <div className="box">
                            <div className="columns is-mobile">
                                <div className="column">
                                    <Link to="/auth/login">
                                        <button className="button is-large is-primary" >Login as User</button>
                                    </Link>
                                </div>
                                <div className="column">
                                    <button className="button is-large is-primary">Login as Guest</button>
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
                                    <button className="button is-link">Register as User</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}