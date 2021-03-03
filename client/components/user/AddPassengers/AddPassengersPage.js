import React, { useEffect, useState } from "react";
import selectedSeatDataStore from "../../../data-stores/SelectedSeatDataStore";
import {bookFlights, readSeatPricesByFlightId} from "../../../api-access/flight-api";
import {Link, Redirect} from "react-router-dom";
import auth from "../auth/auth-helper";
import Menu from "../../core/Menu";

export default function AddPassengersPage({match,history}) {
  const [values, setValues] = useState({
    selectedSeats: {},
    seatPrices:{
      'Platinum':'',
      'Business':'',
      'Economy':'',
    },
      forward:false,
      total:0,
      final_price:0,
  });
  const [amounts,setAmounts] = useState({
      total:0,
      discount:0,
      final_price:0,
  })
    const [redirect,setRedirect] = useState(false);
  useEffect(() => {
    readSeatPricesByFlightId(match.params.flightId).then((data)=>{
      setValues({
        selectedSeats: selectedSeatDataStore.getSeats(match.params.flightId),
        seatPrices: {
          'Platinum':data.platinum_seat_price,
          'Business':data.business_seat_price,
          'Economy':data.economy_seat_price
        },
      });
    });
  }, []);
  useEffect(()=>{
     const sum = Object.values(values.selectedSeats).reduce((initial,item)=>initial+Number(values.seatPrices[item.type]),0)
     setAmounts({
         total:sum,
         final_price: sum*(1-Number(auth.isAuthenticated().user.discount)/100),
         discount: auth.isAuthenticated().user.discount
     })
  },[values])
    const getSeatCode = (column,row)=>{
      if(row<10){
          return [`${column}0${row}`]
      }
      else{
            return [`${column}${row}`]
        }
    }
  const handleChange = (seat, name) => (event) => {
    setValues({
      ...values,
      selectedSeats: {
        ...values.selectedSeats,
        [`${seat.column}${seat.row}`]: {
          ...values.selectedSeats[`${seat.column}${seat.row}`],
          [name]: event.target.value,
        },
      }
    });
  };

  const processForm = (event)=>{
        event.preventDefault()
        selectedSeatDataStore.setSeats(match.params.flightId,values.selectedSeats);
        setValues({
            ...values,forward: true
        })
  }
  const closeModal = (event)=>{
      event.preventDefault()
      setValues({
          ...values,forward: false
      })
  }

  const bookingConfirmed = (event)=>{
      event.preventDefault()
      const seats = selectedSeatDataStore.getSeats(match.params.flightId)
      console.log(seats)
      bookFlights(match.params.flightId,{seats:seats,amounts:amounts},auth.isAuthenticated().user).then(()=>{
          selectedSeatDataStore.dropSeats(match.params.flightId);
          setRedirect(true)
      })

  }
  if(redirect){
      return <Redirect to={"/flight/schedule"}/>
  }
  return (
      <div><Menu/>
    <div className="container">
        {values.forward &&
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Final Confirmation</p>
                    <button className="delete" aria-label="close" onClick={closeModal}></button>
                </header>
                <section className="modal-card-body">
                      <div className="container">
                          <table className="table">
                              <tbody>
                                    <tr>
                                        <td>Total Standard Price:</td>
                                        <td>{amounts.total}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount:</td>
                                        <td>{auth.isAuthenticated().user.discount}</td>
                                    </tr>
                                    <tr>
                                        <td>Final Price:</td>
                                        <td>{amounts.final_price}</td>
                                    </tr>
                              </tbody>
                          </table>
                      </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={bookingConfirmed} >Confirm</button>
                    <button className="button" onClick={closeModal}>Cancel</button>
                </footer>
            </div>
        </div>
        }
      <section className="section content">
        <h1>Add Passenger Details</h1>
        <div className="section mt-2">
          {Object.values(values.selectedSeats).map((seat, i) => {
            seat.price = values.seatPrices[seat.type];
            return (
              <section className="mt-2" key={i}>
                <form>
                  <div className="level">
                    <div className="level-left">
                      <div className="level-item">
                        <h3>Passenger No : {i + 1}</h3>
                      </div>
                    </div>
                    <div className="level-right">
                      <div className="level-item">
                        <h3>Seat no : {`${seat.column}${seat.row}`}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Name of the passenger"
                        onChange={handleChange(seat,"passenger_name")}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">DOB</label>
                    <div className="control">
                      <input
                        className="input"
                        type="date"
                        placeholder="Age of the passenger"
                        onChange={handleChange(seat,"passenger_dob")}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Passport number</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Passport number of the passenger"
                        onChange={handleChange(seat,"passenger_passport_no")}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="field">
                      <label className="label">Seat type</label>
                      <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={seat.type}
                            disabled
                        />
                      </div>
                    </div>
                    <label className="label">Price</label>
                    <div className="control">
                      <input
                          className="input" disabled value={values.seatPrices[seat.type]}
                          type="number"
                      />
                    </div>
                  </div>
                </form>
                <hr />
              </section>
            );
          })}
          <section className="mt-2 section content">
           <div className="container level">
            <div className="level-left">
              <div className="level-item">
                <h3>Total Amount :</h3>
              </div>
            </div>
             <div className="level-right">
               <div className="level-item">
                 <h3>{
                     amounts.total
                 }</h3>
               </div>
             </div>
           </div>
          </section>
          <section className="level">
           <div className="level-left">
            <div className="level-item">
                <Link to={"/flight/book/"+match.params.flightId}>
                <button className="button is-danger">Go Back</button>
                </Link>
            </div> 
           </div>
          <div className="level-left">
              <div className="level-item">
                  <button className="button is-success" onClick={processForm}>Confirm</button>
              </div>
          </div>
          </section>
        </div>
      </section>
    </div>
      </div>
  );
}
