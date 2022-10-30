import { createContext } from "react";

export const AppContext = createContext({
  isSideOpen: false,
  setSideOpen: () => {},
  user: null,
  setUser: () => {},
});
export const UserContext = createContext(null);

export const UpdateContext = createContext({
  updateData: () => {},
});
