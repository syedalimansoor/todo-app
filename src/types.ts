export interface Todo {
  id: string;
  status: "active" | "completed";
  text: string;
}

export type Mode = "dark" | "light";

export type Filter = "all" | "active" | "completed";

export interface GlobalState {
  mode: Mode;
  todos: Todo[];
}

import themes from "$/themes";

export type Theme = typeof themes["dark"] & typeof themes["light"];
export interface ThemeProps {
  theme: Theme;
}
