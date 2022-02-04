import { useState } from 'react';

function Counter() {

    const [counter, setCounter] = useState(0);

    function handleAcress(){
        setCounter(counter + 1);
    }

    function handleDecress(){
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>{counter}</h1>
            <button className="decrement" onClick={handleDecress}> Decrement </button>
            <button className="increment" onClick={handleAcress}> Increment </button>

        </>
    )



}

export default Counter