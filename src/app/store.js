import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/restaurant/reservationSlice";
import customerReducer from "../features/restaurant/customerSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customer: customerReducer,
  },
});
