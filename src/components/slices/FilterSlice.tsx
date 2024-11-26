import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps{
  totalProducts:number
}
const initialState:initialStateProps ={
  totalProducts:0,
  

}

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {},
});

export default filterSlice.reducer;
