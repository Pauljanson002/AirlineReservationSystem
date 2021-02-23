import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './core/Home'
import Login from './user/auth/login'
import UserFlightSchedule from './user/user.flightschedule'
import RegisterUserPage from "./registered_user/registered_user_register";
import BookFlightPage from "./user/user.book_flight";
import AddPassengersPage from "./user/user.add_passengers";
import RegisteredUserProfile from "./registered_user/RegisteredUserProfile";
import UserPrivateRoute from "./user/auth/UserPrivateRoute";
const MainRouter = () =>{
    return (<div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <UserPrivateRoute exact path="/flight/add-passengers" component={AddPassengersPage}/>
            <Route exact path="/registered_user/register" component={RegisterUserPage}/>
            <UserPrivateRoute exact path="/registered_user/profile" component={RegisteredUserProfile}/>
            <UserPrivateRoute exact path="/flight/schedule" component={UserFlightSchedule}/>
            <UserPrivateRoute exact path="/flight/book/:flightId" component={BookFlightPage}/>
            <Route exact path="/registered_user/signin" component={Login}/>

        </Switch>
    </div>)
}

export default MainRouter