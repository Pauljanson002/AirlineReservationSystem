import React, { useEffect, useState } from "react";
import selectedSeatDataStore from "./components/SelectedSeatDataStore";

export default function AddPassengersPage() {
  const [values, setValues] = useState({
    selectedSeats: {},
  });
  useEffect(() => {
    setValues({
      selectedSeats: selectedSeatDataStore.getSeats(),
    });
  }, []);
  const handleChange = (seat, name) => (event) => {
    setValues({
      selectedSeats: {
        ...values.selectedSeats,
        [`${seat.column}${seat.row}`]: {
          ...values.selectedSeats[`${seat.column}${seat.row}`],
          ["name"]: event.target.value,
        },
      },
    });
  };

  return (
    <div className="container">
      <section className="section content">
        <h1>Add Passenger Details</h1>
        <div className="section mt-2">
          {Object.values(values.selectedSeats).map((seat, i) => {
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
                    <label className="label">Age</label>
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        placeholder="Age of the passenger"
                        onChange={handleChange(seat,"passenger_age")}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Passport number</label>
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        placeholder="Passport number of the passenger"
                        onChange={handleChange(seat,"passenger_passport_no")}
                      />
                    </div>
                  </div>
                </form>
                <hr />
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
}
