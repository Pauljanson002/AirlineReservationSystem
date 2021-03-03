import React from "react";
import FlightDetail from "./FlightDetail";
export default function FlightDetailCanvas({ flights }) {
  return (
    <div>
      {flights.length === 0
        ? (<div className={"container content"}>
                <div className={"container"}>
                  <h1>No flights available</h1>
                </div>
          </div>
           )
        : flights.map((flight, i) => {
            return (
              <FlightDetail
                airplane_model={flight.model_name}
                departure_time={flight.departure_time}
                to_airport={flight.to_airport}
                from_airport={flight.from_airport}
                arrival_time={flight.landing_time}
                duration={`${flight.duration.hours} hours ${
                  flight.duration.minutes|| 0
                } minutes`}
                flight_id={flight.flight_id}
                from_address={flight.from_address}
                to_address={flight.to_address}
                key={i}
              />
            );
          })}
    </div>
  );
}