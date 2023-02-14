import React , { useState } from "react";



function App4(){
    const [count , setcount] = useState(0);


    function increase(){
        setcount(count + 1);
    }
    function decrease(){
        setcount(count - 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default App4;