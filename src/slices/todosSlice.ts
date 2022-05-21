import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../types";
import { v4 as uuid } from "uuid";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    add: (state, action: { payload: { text: string } }) => {
      state.push({
        id: uuid(),
        status: "active",
        text: action.payload.text,
      });
    },
    remove: (state, action: { payload: { id: string } }) => {
      state = state.filter((todo) => todo.id !== action.payload.id);
    },
    edit: (state, action: { payload: { id: string; text: string } }) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
    },
    toggleStatus: (state, action: { payload: { id: string } }) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.status = todo.status === "active" ? "completed" : "active";
    },
  },
});

export const { add, remove, edit, toggleStatus } = todosSlice.actions;
export default todosSlice.reducer;
