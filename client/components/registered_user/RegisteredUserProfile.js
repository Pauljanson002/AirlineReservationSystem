import React, {useEffect, useState} from 'react'
import auth from "../user/auth/auth-helper";
import Menu from "../core/Menu";
import {Link} from "react-router-dom";

export default function RegisteredUserProfile() {
    const [user,setUser] = useState({})
    useEffect(()=>{
      const val = auth.isAuthenticated().user;
      setUser({...val,type:val.type.toUpperCase()})
    },[])
    return(
        <div>
            <Menu/>
            <div className="content container">
                <section className={"section"}>
                    <h1>{user.first_name}   {user.last_name}</h1>
                    <h2>{user.type} User </h2>
                </section>
                <div className={"columns"}>
                    <div className={"column"}>
                        Email :
                    </div>
                    <div className={"column"}>
                        {user.email}
                    </div>
                </div>
                <div className={"columns"}>
                    <div className={"column"}>
                        Telephone :
                    </div>
                    <div className={"column"}>
                        {user.telephone}
                    </div>
                </div>
                <div className={"columns"}>
                    <div className={"column"}>
                        Discount :
                    </div>
                    <div className={"column"}>
                        {user.discount}
                    </div>
                </div>
                <div className={"columns"}>
                    <div className={"column"}>
                        Booking Count :
                    </div>
                    <div className={"column"}>
                        {user.booking_count}
                    </div>
                </div>
                <div>
                    <Link to={"/registered_user/profile/edit"}>
                        <button className={"button is-link"}>Edit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}