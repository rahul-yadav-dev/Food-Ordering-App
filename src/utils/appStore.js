const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // Responsible for modifying the appstore
    // For each slice we will have a different reducer
    cart: cartReducer,
  },
});

export default appStore;
