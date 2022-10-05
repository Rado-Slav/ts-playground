import {useState, useEffect, useMemo} from "react";

export interface Beverage {
    price: string;
    name: string;
    rating: {
        average: number;
        reviews: number;
    };
    image: string;
    id: number;
}

function useFetchData<Payload>(url: string): {
    data: Payload | null,
    done: boolean,
} {
    const [data, dataSet] = useState<Payload | null>(null)
    const [done, doneSet] = useState(false)

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then((d: Payload) => {
                dataSet(d);
                doneSet(true)
                console.log(data);
            })
    }, [url])

    return {
            data,
            done
        }
}

export default function CustomHookComponent() {
    const { data, done } = useFetchData<Beverage[]>("/beer-api.json")
    const sierrNevadaBeers = useMemo(() =>
        (data || []).filter(beer => beer.name.includes("Sierra"))
    , [data]);

    return (
        <div>
            {done && (
                <>
                <img alt="Beer Logo" src={data![0].image} />
                <img alt="Beer Logo" src={sierrNevadaBeers![1].image} />
                </>
            )}
        </div>
    )
}