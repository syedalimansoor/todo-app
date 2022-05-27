import { RootState } from "$/store";
import { Todo } from "$/types";
import ls from "$/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

let todos = ls.get<Todo[]>("todos");
todos ??= [
  { id: uuid(), status: "active", text: "Welcome to Todo App" },
  { id: uuid(), status: "active", text: "Add a todo or edit an existing one" },
  { id: uuid(), status: "active", text: "Filter todos by their status" },
  {
    id: uuid(),
    status: "active",
    text: "Create multi-line todos\non desktops",
  },
  {
    id: uuid(),
    status: "active",
    text: "Toggle between light and dark mode using the button on the top",
  },
  { id: uuid(), status: "completed", text: "End of introduction" },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState: (todos || []) as Todo[],
  reducers: {
    /** Add a todo to the store */
    add: (state, action: { payload: { text: string } }) => {
      state.push({
        id: uuid(),
        status: "active",
        text: action.payload.text,
      });
      updateLS(state);
      return state;
    },

    /** Remove a todo from the store */
    remove: (state, action: { payload: { id: string } }) => {
      state = state.filter((todo) => todo.id !== action.payload.id);
      updateLS(state);
      return state;
    },

    /** Edit an existing todo's text */
    edit: (state, action: { payload: { id: string; text: string } }) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.text = action.payload.text;
      updateLS(state);
      return state;
    },

    /** Toggle an existing todo's status between active and completed */
    toggleStatus: (state, action: { payload: { id: string } }) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.status = todo.status === "active" ? "completed" : "active";
      updateLS(state);
      return state;
    },

    /** Removes completed todos */
    removeCompleted: (state) => {
      state = state.filter((todo) => todo.status !== "completed");
      updateLS(state);
      return state;
    },
  },
});

export const { add, remove, edit, toggleStatus, removeCompleted } =
  todosSlice.actions;
export const todosSelector = (state: RootState) => state.todos;
export default todosSlice.reducer;

function updateLS(state: Todo[]) {
  ls.set<Todo[]>("todos", state);
}
