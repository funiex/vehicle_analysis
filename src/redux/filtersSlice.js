// used stores and updates states of filters of data analyzer page using redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  make: "All",
  fuelType: "All",
  transmission: "All",
  orderBy: "None",
  year: 0,
  mileageKML: 0,
  engineCC: 0,
  power: 0,
  seats: 0,
  price: 0,
  numberOfRecords: 50,
};
export const filtersSlice = createSlice({
  name: "filters",
  initialState: initialStateValue,
  reducers: {
    setMake: (state, action) => {
      state["make"] = action.payload;
    },
    setFuelType: (state, action) => {
      state["fuelType"] = action.payload;
    },
    setTransmission: (state, action) => {
      state["transmission"] = action.payload;
    },
    setOrderBy: (state, action) => {
      state["orderBy"] = action.payload;
    },
    setYear: (state, action) => {
      state["year"] = action.payload;
    },
    setMileageKML: (state, action) => {
      state["mileageKML"] = action.payload;
    },
    setEngineCC: (state, action) => {
      state["engineCC"] = action.payload;
    },
    setPower: (state, action) => {
      state["power"] = action.payload;
    },
    setSeats: (state, action) => {
      state["seats"] = action.payload;
    },
    setPrice: (state, action) => {
      state["price"] = action.payload;
    },
    setNumberOfRecords: (state, action) => {
      state["numberOfRecords"] = action.payload;
    },
  },
});
export const {
  setMake,
  setFuelType,
  setTransmission,
  setOrderBy,
  setYear,
  setMileageKML,
  setEngineCC,
  setPower,
  setSeats,
  setPrice,
  setNumberOfRecords,
} = filtersSlice.actions;
export default filtersSlice.reducer;
