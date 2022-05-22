import { createSlice } from "@reduxjs/toolkit";
import { Mode } from "../types";
import * as ls from "local-storage";

const mode = ls.get<Mode | null>("mode");

export const modeSlice = createSlice({
  name: "mode",
  initialState: (mode || "light") as Mode,
  reducers: {
    toggle: (state) => {
      if (state === "dark") {
        ls.set<Mode>("mode", "light");
        return "light";
      }
      ls.set<Mode>("mode", "dark");
      return "dark";
    },
  },
});

export const { toggle } = modeSlice.actions;
export default modeSlice.reducer;
