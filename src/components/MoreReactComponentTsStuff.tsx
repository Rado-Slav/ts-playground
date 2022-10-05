import {ReactNode} from "react";

export interface HeadingProps {
    title: string,
}

function Heading({title}: HeadingProps) {
    return <h1>{title}</h1>
}

export function List<ListItem>({items, render}: {items: ListItem[], render: (item: ListItem) => ReactNode}) {
    return (
        <ul>
                {items.map((item, index) =>
                    <li>
                        {render(item)}
                    </li>
                )}
        </ul>
    )
}

export default function TestComponent() {
    return (
     <>
         <List items={['a', 'b', 'c']} render={(item: string) => <>{item.toLowerCase()}</>} />
         <Heading title="Hello Sir, How are you feeling today?"></Heading>
     </>
    )
}