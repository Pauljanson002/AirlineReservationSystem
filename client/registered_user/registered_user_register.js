import React from 'react'
import RegisterForm from "./components/registerform";
import '../core/Home.css'
const RegisterUserPage = ()=>{
    return(
        <div className="container">
            <section className="section">
                <h1 className="is-size-1 pb-0">Register as a new user</h1>
            </section>
            <section className="section pt-0">
                <RegisterForm/>
            </section>
        </div>
    )
}

export default RegisterUserPage