import './main.css';
import { useState } from 'react';

export default function FlipCard() {

    // const { flip, setFlip } = useState(false);

    return (
        <>
            <div>Flip Card Effect</div>
            <div className="card-container">
                <div className='card card1'>3</div>
                <div className='card card2'>3</div>
                <div className='card card3'>4</div>
                <div className='card card4'>4</div>
            </div>
        </>
    )
}