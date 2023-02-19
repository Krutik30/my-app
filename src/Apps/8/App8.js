import { useState } from "react";

function App8(){

    const [name , setName] = useState("");
    const [headingText , setHeadingText] = useState("");

    function handleChange(event){
        setName(event.target.value); 
    }

    function checkSubmit(event){
        setHeadingText(name);

        event.preventDefault();
    }

    return (
        <div>
            <h1>Hello, {headingText}</h1>
            <form onSubmit={checkSubmit}>
                <input onChange={handleChange} className="d-block" type="text" placeholder="What's your name?" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App8;