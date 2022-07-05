import React, { useRef, useState } from "react";
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
  const colorRef = useRef();
  const [color, setColor] = useState("#FFFFFF");
  return (
    <div className="customerCard">
      <div
        style={{ backgroundColor: color }}
        className="customerCard__foodCard_container"
      >
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
            <div>
              <input
                type="color"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
