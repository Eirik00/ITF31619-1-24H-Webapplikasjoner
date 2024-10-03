// Startkode
import { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <div>
        <h2>Teller: {number}</h2>
        <button onClick={()=>setNumber(num => num+1)}>Øk</button>
        <button onClick={()=>setNumber(num => num+1)}>Reduser</button>
        <button onClick={()=>setNumber(0)}>Nullstille</button>
        </div>
    );
};

export default Counter;