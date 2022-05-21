import { createSlice } from "@reduxjs/toolkit";
import { Mode } from "../types";

export const modeSlice = createSlice({
  name: "mode",
  initialState: "light" as Mode,
  reducers: {
    toggle: (state) => (state === "dark" ? "light" : "dark"),
  },
});

export const { toggle } = modeSlice.actions;
export default modeSlice.reducer;
