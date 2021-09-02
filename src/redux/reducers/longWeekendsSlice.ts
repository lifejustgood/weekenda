import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "../configureStore";
import { LongWeekendDto } from "../../datatypes";
import { getLongWeekendsList } from "../../api/listApi";

const initialState: LongWeekendDto[] = [];

export const longWeekendsSlice = createSlice({
  name: "longWeekendsList",
  initialState,
  reducers: {
    load(state, action: PayloadAction<LongWeekendDto[]>) {
      return [...action.payload];
    },
  },
});



export async function fetchList(key: string): Promise<LongWeekendDto[]> {
  const response = await getLongWeekendsList(key);

  return response;
}

export const loadList = (key: string): AppThunk => async (dispatch: AppDispatch) => {
  const newList = await fetchList(key);
  dispatch(longWeekendsSlice.actions.load([...newList]));
};


