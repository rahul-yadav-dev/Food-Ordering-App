import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // modifying the state itself
      state.items.push(action.payload);

      // older (vanila redux) => Don't mutate the state, return the state was mandatory
      // const newState = [...oldState];
      // newState.items.push(action.payload);
      // return newState;

      // new: redux toolkit
      // no option, have to mutate the old state
    },

    removeItem: (state) => {
      state.items.pop();
    },

    // originalState = ["pizza"]
    clearCart: (state) => {
      // makes state.items as empty array
      state.items.length = 0;

      // VERY IMPORTANT
      // if we assign state = []
      // state(local variable) will be assigned empty array but the orignalState of which ref was passed when this function was called
      // won't change it's value, which is read by header/store

      // to console.log state, we need to console.log(current(state)); current comes from redux js toolkit
      // note: state = [] does not work since this changes the reference of state object, we need to modify it

      // RTK says either mutate the original state, or return the new state
      // anothe option: return {items: []}
    },
  },
});

// We export cart slice actions and reducers

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
