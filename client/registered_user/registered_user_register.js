import React from 'react'
import RegisterForm from "./components/registerform";

const RegisterUserPage = ()=>{
    return(
        <div className="container">
            <section className="section">
                <h1 className="is-size-1">Register as a new user</h1>
            </section>
            <section className="section">
                <RegisterForm/>
            </section>
        </div>
    )
}

export default RegisterUserPage