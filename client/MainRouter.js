import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './core/Home'
import Login from './auth/login'
import UserFlightSchedule from './user/user.flightschedule'
import RegisterUserPage from "./registered_user/registered_user_register";
const MainRouter = () =>{
    return (<div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/registered_user/register" component={RegisterUserPage}/>
            <Route exact path="/flight" component={UserFlightSchedule}/>
            <Route exact path="/auth/login" component={Login}/>

        </Switch>
    </div>)
}

export default MainRouter