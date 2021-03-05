import React, {useEffect, useState} from 'react'
import Menu from "../../core/Menu";
import {cancelBookingWithCode, confirmBookingWithCode, listBookingWithUserId} from "/client/api-access/booking-api";
import auth from "../auth/auth-helper";

export default function ViewBookingPage() {
    const [bookings,setBookings] = useState({
        unpaid:[],
        paid:[]
    })
    useEffect(()=>{
      listBookingWithUserId(auth.isAuthenticated().user.id).then((data)=>{
          setBookings({
              unpaid:data.filter((item)=> item.booking_state ==='created'),
              paid:data.filter((item)=>item.booking_state !== 'created')
          })
      })
    },[])

    const confirmBooking = (key)=>(event)=>{
       const booking =  bookings.unpaid[key]
        confirmBookingWithCode(booking.booking_code).then((data)=>{
            console.log(data)
            bookings.unpaid.splice(key,1)
            setBookings({
                ...bookings,
                ['unpaid']:bookings.unpaid
            })
        })
    }
    const cancelBooking = (key)=>(event)=>{
        const booking = bookings.unpaid[key]
        cancelBookingWithCode(booking.booking_code).then((data)=>{
            console.log(data)
            bookings.unpaid.splice(key,1)
            setBookings(
                {
                    ...bookings,
                    ['unpaid']:bookings.unpaid
                }
            )
        })
    }
    return(
        <div>
            <Menu/>
            <div className="section content">
               <div className={"container"}>
                   <h1>Pending Bookings</h1>
                    <table className={"table"}>
                        <thead>
                            <tr>

                                <th>Booking Code</th>
                                <th>Ticket Count</th>
                                <th>Confirm</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.unpaid.map((item,i)=>{
                                return(
                                    <tr key={i}>

                                        <td>{item.booking_code}</td>
                                        <td>{item.count}</td>
                                        <td><button className={"button"} onClick={confirmBooking(i)}>Pay</button></td>
                                        <td><button className={"button"} onClick={cancelBooking(i)}>Cancel</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
               </div>
            </div>
            <div className="section content">
                <div className={"container"}>
                    <h1>Past Bookings</h1>
                    <table className={"table"}>
                        <thead>
                        <tr>

                            <th>Booking Code</th>
                            <th>Ticket Count</th>

                        </tr>
                        </thead>
                        <tbody>
                        {bookings.paid.map((item,i)=>{
                            return(
                                <tr key={i}>

                                    <td>{item.booking_code}</td>
                                    <td>{item.count}</td>

                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}