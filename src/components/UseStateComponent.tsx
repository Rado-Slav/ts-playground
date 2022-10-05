import { useState } from "react";

export default function useStateComponent() {
    const [arr, arrSet] = useState<number[]>([])
    const [name, nameSet] = useState<string | null>(null)

    return (
        <div>
            <h1>useStateComponent</h1>
            <div>
                <button onClick={() => arrSet([
                    ...arr,
                    arr.length + 1
                ])}>Add Number</button>
            </div>
            {JSON.stringify(arr)}
            <div>
                <button onClick={() => nameSet("JACK")}>Set Name</button>
            </div>
            {JSON.stringify(name)}
        </div>
    )
}