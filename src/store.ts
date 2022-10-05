import { createContext } from "react";

const initialState = {
    first: "Radoslav",
    last: "Mitov"
}

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;

