import { useRef } from "react";

export default function useRefComponent() {
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <>
            <h1>Use Ref Input</h1>
        <input ref={inputRef} />
        </>
    )

}