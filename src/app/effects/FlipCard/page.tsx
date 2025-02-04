import './main.css';

export default function FlipCard() {

    return (
        <div className='flex flex-col '>
            <div>Flip Card Effect Implemented with CSS</div>
            <div className="card-container">
                <div className='card card1'>3</div>
                <div className='card card2'>3</div>
                <div className='card card3'>4</div>
                <div className='card card4'>4</div>
            </div>
        </div>
    )
}