import { useState, useEffect } from "react";

export default function useEffectComponent() {
    const [val, valSet] = useState<number>(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            val < 50 ? valSet((v) => v + 1) : window.clearInterval(timer);
        }, 1000)
        return () => window.clearInterval(timer);
    }, [val])

    return (
        <div>
            <h1>useEffectComponent - Count to 50</h1>
            <div>{val}</div>
        </div>
    )
}