import {useReducer} from "react";

const initialState = {
    counter: 100,
}

type ACTIONTYPES =
    | {type: "increment", payload: number }
    | {type: "decrement", payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
    switch(action.type) {
        case "increment":
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        case "decrement":
            return {
                ...state,
                counter: state.counter - action.payload,
            };
        default:
            throw new Error("Shit sonnnn!");
    }
}

export default function UseReducerComponent() {
    const [ state, dispatch ] = useReducer(counterReducer, initialState);

    return (
        <div>
            <h1>Use Reducer Component</h1>
        <div>
            {state.counter}
        </div>
            <div>
                <button onClick={() => dispatch({
                    type: "increment",
                    payload: 10
                })}>Increment</button>
                <button onClick={() => dispatch({
                    type: "decrement",
                    payload: 10
                })}>Decrement</button>
            </div>
        </div>
    )
}