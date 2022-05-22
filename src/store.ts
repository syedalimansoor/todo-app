import { configureStore } from "@reduxjs/toolkit";
import mode from "$/slices/modeSlice";
import todos from "$/slices/todosSlice";

export default configureStore({
  reducer: {
    mode,
    todos,
  },
});
