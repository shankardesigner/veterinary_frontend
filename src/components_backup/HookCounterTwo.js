import React, { useState } from 'react'

function HookCounterTwo() {

    const initialState = 0;
    const [count, setCount] = useState(initialState);
    const incrementBy5 = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            count: {count}
            <br/>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementBy5}>IncrementBy5</button>
        </div>
    )
}

export default HookCounterTwo
