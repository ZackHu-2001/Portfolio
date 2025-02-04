'use client'
import { useEffect, useState } from "react"

enum Colors {
    RED = 'RED',
    YELLOW = 'YELLOW',
    GREEN = 'GREEN'
}

const TrafficLight: React.FC<{}> = () => {
    const [color, setColor] = useState(Colors.RED);
    const [cur, setCur] = useState(0);
    const arr: [number, Colors][] = [[4000, Colors.YELLOW], [500, Colors.GREEN], [3000, Colors.RED]];

    useEffect(() => {
        const timeId = setTimeout(() => {
            setColor(arr[cur][1])
            setCur((cur + 1) % 3)
        }, arr[cur][0])

        return () => {
            clearTimeout(timeId);
        }
    }, [color]);

    return (
        <div>{color}</div>
    )
}

export default TrafficLight;