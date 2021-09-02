import { createSlice } from "@reduxjs/toolkit";
import { longWeekendsSlice } from "./longWeekendsSlice";



const initialState  = false;

export const loadedSlice = createSlice({
  name: "isLoaded",
  initialState,
  reducers: {
    },
  extraReducers: {
    [longWeekendsSlice.actions.load.type]: state => state = true

  }

});
