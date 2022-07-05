import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addReservation } from "../../features/restaurant/reservationSlice";
import CustomerCard from "./customers/customerCard";
import ReservationCard from "./reservations/reservationCard";

export const Restraurant = () => {
  const dispatch = useDispatch();

  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector((state) => state.reservations.value);
  const customers = useSelector((state) => state.customer.value);
  const handleAddReservations = () => {
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };

  return (
    <div className="App">
      <h5 className="App__header">
        <span>🍳</span>
        Leah's Restaurant
      </h5>
      <div className="App__container">
        <div className="reservation__container">
          <div>
            <h5 className="reservation__header">Reservations</h5>
            <div className="reservation__cards_container">
              {reservations.map((name, index) => {
                return (
                  <ReservationCard name={name} index={index} key={index} />
                );
              })}
            </div>
          </div>
          <div className="reservation__input_container">
            <input
              value={reservationNameInput}
              onChange={(e) => {
                setReservationNameInput(e.target.value);
              }}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customerCard__food_container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
                key={customer.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
