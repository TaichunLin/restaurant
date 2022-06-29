import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../../../features/restaurant/customerSlice";

// interface CustomerCardType {
//   id: string;
//   name: string;
//   food: string[];
// }

function CustomerCard({ id, name, food }) {
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="customerCard">
      <div className="customerCard__foodCard_container">
        <h5>{name}</h5>

        <div className="customerCard__foods_container">
          <div className="customerCard__food">
            {food.map((food, index) => {
              return <p key={index}>{food}</p>;
            })}
          </div>
          <div className="customerCard__food_input_container">
            <input
              value={customerFoodInput}
              onChange={(e) => setCustomerFoodInput(e.target.value)}
            />
            <button
              onClick={() => {
                dispatch(
                  addFoodToCustomer({
                    id,
                    food: customerFoodInput,
                  })
                );
                setCustomerFoodInput("");
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
