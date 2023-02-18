import { useState } from "react";

function App8(){

    function handleChange(event){
        console.log(event.target.value);
    }

    return (
        <div>
            <h1>Hello</h1>
            <input onChange={handleChange} className="d-block" type="text" placeholder="What's your name?" />
            <button
                
            >Submit</button>
        </div>
    )
}

export default App8;