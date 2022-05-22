import { createSlice } from "@reduxjs/toolkit";
import * as ls from "local-storage";
import { Mode } from "@/types";

const mode = ls.get<Mode | null>("mode");

export const modeSlice = createSlice({
  name: "mode",
  initialState: (mode || "light") as Mode,
  reducers: {
    toggle: (state) => {
      if (state === "dark") {
        ls.set<Mode>("mode", "light");
        state = "light";
      } else {
        ls.set<Mode>("mode", "dark");
        state = "dark";
      }
    },
  },
});

export const { toggle } = modeSlice.actions;
export default modeSlice.reducer;
