
import { configureStore, Action } from "@reduxjs/toolkit";
import { selectedCountrySlice } from "./reducers/selectedCountrySlice";
import { longWeekendsSlice } from "./reducers/longWeekendsSlice";
import { ThunkAction } from "redux-thunk";
import { loadedSlice } from "./reducers/loadedSlice";

const store = configureStore({
  reducer: {
    selectedCountry: selectedCountrySlice.reducer,
    longWeekendsList: longWeekendsSlice.reducer,
    isLoaded: loadedSlice.reducer
  } });


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;