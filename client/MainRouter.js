import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './core/Home'
import Login from './auth/login'
import UserFlightSchedule from './user/user.flightschedule'
const MainRouter = () =>{
    return (<div>
        <Switch>
            {/*<Route exact path="/" component={Home}/>*/}
            <Route exact path="/" component={UserFlightSchedule}/>
            <Route exact path="/auth/login" component={Login}/>
        </Switch>
    </div>)
}

export default MainRouter