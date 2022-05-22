import { configureStore } from "@reduxjs/toolkit";
import mode from "$/slices/modeSlice";
import todos from "$/slices/todosSlice";

const store = configureStore({
  reducer: {
    mode,
    todos,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
