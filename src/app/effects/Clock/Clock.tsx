'use client'
import { useState } from 'react';

const NUMBER_TO_CLASS = {
    0: {
        top: [
            'border-top',
            'border-left',
            'border-right'
        ],
        bottom: [
            'border-bottom',
            'border-left',
            'border-right'
        ]
    },
    1: {
        top: [
            'border-right',
        ],
        bottom: [
            'border-right'
        ]
    },
    2: {
        top: [
            'border-top',
            'border-right',
            'border-bottom'
        ],
        bottom: [
            'border-top',
            'border-bottom',
            'border-left'
        ]
    },
    3: {
        top: [
            'border-top',
            'border-bottom',
            'border-right'
        ],
        bottom: [
            'border-top',
            'border-bottom',
            'border-right'
        ]
    },
    4: {
        top: [
            'border-left',
            'border-right',
            'border-bottom'
        ],
        bottom: [
            'border-top',
            'border-right'
        ]
    },
    5: {
        top: [
            'border-top',
            'border-left',
            'border-bottom'
        ],
        bottom: [
            'border-top',
            'border-right',
            'border-bottom'
        ]
    },
    6: {
        top: [
            'border-top',
            'border-left',
            'border-bottom'
        ],
        bottom: [
            'border-bottom',
            'border-top',
            'border-left',
            'border-right'
        ]
    },
    7: {
        top: [
            'border-top',
            'border-right',
        ],
        bottom: [
            'border-right'
        ]
    },
    8: {
        top: [
            'border-top',
            'border-bottom',
            'border-left',
            'border-right',
        ],
        bottom: [
            'border-top',
            'border-bottom',
            'border-left',
            'border-right'
        ]
    },
    9: {
        top: [
            'border-top',
            'border-bottom',
            'border-left',
            'border-right',
        ],
        bottom: [
            'border-top',
            'border-right'
        ]
    },
}

interface DigitProps {
    number: number
}

const Digit: React.FC<DigitProps> = ({ number }) => {
    return (
        <div className='digitContainer'>
            <div className={[
                'digitPart',
                'top',
                ...NUMBER_TO_CLASS[number].top
            ].join(' ')}></div>
            <div className={[
                'digitPart',
                'bottom',
                ...NUMBER_TO_CLASS[number].bottom
            ].join(' ')}></div>
        </div>
    )
}


function getCurrentTime() {
    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 500)

    return time;
}

export default function Clock() {
    const now = getCurrentTime();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    return <div className="container">
        <Digit number={parseInt(String(hours / 10), 10)}></Digit>
        <Digit number={hours % 10}></Digit>
        <Segment></Segment>
        <Digit number={parseInt(String(minutes / 10), 10)}></Digit>
        <Digit number={minutes % 10}></Digit>
        <Segment></Segment>
        <Digit number={parseInt(String(seconds / 10), 10)}></Digit>
        <Digit number={seconds % 10}></Digit>
    </div>;
}



function Segment() {
    return <div className="segment">
        <div className="dot"></div>
        <div className="dot"></div>
    </div>
}