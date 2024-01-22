import { createSlice } from "@reduxjs/toolkit";
//redux store tabs state
//tabs state used in |DRAW CHARTS/VIEW RECORDS| menu on data analyzer page
const initialStateValue = {
  displayCharts: "",
  displayRecords: "none",
};

export const tabsSlice = createSlice({
  name: "tabs",
  initialState: initialStateValue,
  reducers: {
    // changing display property of chart drawer and records viewer
    viewCharts: (state) => {
      state["displayRecords"] = "none";
      state["displayCharts"] = "";
    },
    viewRecords: (state) => {
      state["displayRecords"] = "";
      state["displayCharts"] = "none";
    },
  },
});

export const { viewCharts, viewRecords } = tabsSlice.actions;
export default tabsSlice.reducer;
