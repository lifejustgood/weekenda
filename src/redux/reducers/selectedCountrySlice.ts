import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedCountry } from "../../datatypes";

const initialState: SelectedCountry = { 
    selectedCountryName: "",
    selectedCountryKey: ""
};

export const selectedCountrySlice = createSlice({
  name: "selectedCountry",
  initialState,
  reducers: {
    select(state, action: PayloadAction<SelectedCountry>) {
      return action.payload;
  }
}
});

export const selectSelectedCountry = selectedCountrySlice.actions.select;