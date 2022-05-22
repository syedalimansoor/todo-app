import { RootState } from "$/store";
import { Mode } from "$/types";
import ls from "$/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";

const mode = ls.get<Mode>("mode");

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
export const selectMode = (state: RootState) => state.mode;
export default modeSlice.reducer;
