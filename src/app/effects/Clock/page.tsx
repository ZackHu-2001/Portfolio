import Clock from './Clock';

import './index.css';

export default function Home() {
    return <div className='h-[100vh] flex flex-col justify-center items-center'>
        <div className='text-xl'>Simple Clock Implemented with JS & CSS</div>
        <Clock />
    </div>
}
