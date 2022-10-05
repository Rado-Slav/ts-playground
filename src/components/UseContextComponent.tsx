import { useState, useContext, useEffect } from "react";
import UserContext, { UserState } from "../store";

function ConsumerComponent() {
    const user = useContext<UserState>(UserContext);

    console.log(UserContext);

    return (
        <div>
            <div>
                First: {user.first}
            </div>
            <div>
                Last: {user.last}
            </div>
        </div>
    )
}

export default function useEffectComponent() {
    const [user, userSet] = useState<UserState>({
        first: "Gosho",
        last: "Petkov"
    })

    return (
        <div>
            <h1>useContextComponent</h1>
            <UserContext.Provider value={user}>
                <ConsumerComponent/>
                <button onClick={() => {
                    userSet({
                        first: "Gad",
                        last: "Mrusna"
                    })
                }}>Change State</button>
            </UserContext.Provider>
            <UserContext.Consumer>
                {value => <div>Fuck you {value.first} !!! {value.last}</div>}
            </UserContext.Consumer>
        </div>
    )
}