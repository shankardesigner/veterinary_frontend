import React, { useState, useEffect } from "react";

function HookCounterArray() {
  const [count, setCount] = useState([]);

  const incrementCount = () => {
    // for (let i = 0; i < 5; i++) {
      setCount([...count, Math.floor(Math.random() * 10)]);
    // }
  };

  useEffect(() => {
    console.log('hi');
  },[]);
  
  const items = count.map(item => {
    return(
      <li key={item}>Added items:- {item}</li>
    )
  })

  return (
    <div>
      <br/>
      <button onClick={incrementCount}>Add items</button>
      <hr/>
      <ul>
        {items}
      </ul>
    </div>
  );
}

export default HookCounterArray;
