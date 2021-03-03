import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './components/core/Home'
import Login from './components/user/auth/login'
import UserFlightSchedule from './components/user/FlightSchedule/FlightSchedulePage'
import RegisterUserPage from "./components/registered_user/registered_user_register";
import BookFlightPage from "./components/user/SeatBooking/BookFlightPage";
import AddPassengersPage from "./components/user/AddPassengers/AddPassengersPage";
import RegisteredUserProfile from "./components/registered_user/RegisteredUserProfile";
import UserPrivateRoute from "./components/user/auth/UserPrivateRoute";
import RegisteredUserProfileEditPage from "./components/registered_user/RegisteredUserProfileEditPage";
import ViewBookingPage from "./components/user/ViewBookings/ViewBookingsPage";
import EmployeePrivateRoute from "./components/Employee/auth/EmployeePrivateRoute";
import EmployeeLogin from './components/Employee/auth/login'
import ScheduleFlightPage from "./components/Employee/schedule/ScheduleFlightPage";
const MainRouter = () =>{
    return (<div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/registered_user/register" component={RegisterUserPage}/>
            <UserPrivateRoute exact path="/registered_user/profile" component={RegisteredUserProfile}/>
            <UserPrivateRoute exact path="/flight/schedule" component={UserFlightSchedule}/>
            <UserPrivateRoute exact path="/flight/book/:flightId" component={BookFlightPage}/>
            <UserPrivateRoute exact path="/flight/add-passengers/:flightId" component={AddPassengersPage}/>
            <UserPrivateRoute exact path="/registered_user/profile/edit" component={RegisteredUserProfileEditPage}/>
            <UserPrivateRoute exact path="/flight/booking" component={ViewBookingPage}/>
            <Route exact path="/registered_user/signin" component={Login}/>
            <Route exact path={"/employee/signin"} component={EmployeeLogin}/>
            <EmployeePrivateRoute exact path={"/employee/schedule"} component={ScheduleFlightPage}/>
        </Switch>
    </div>)
}

export default MainRouter