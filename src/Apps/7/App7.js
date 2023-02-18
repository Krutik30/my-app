import react , {useState} from 'react';

function App7(){

    const [headingText, setHeadingText] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState(false);

    function handelClick(){
        setHeadingText("Submitted");
    }

    function handleMouseOver(){
        setMouseOver(true);
    }

    function handleMouseOut(){
        setMouseOver(false);
    }

    return (
        <div>
            <h1>Hello</h1>
            <input className="d-block" type="text" placeholder="What's your name?" />
            <button
                style={{background: isMouseOver? "black" : "white"}}
                onClick={handelClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >Submit</button>
        </div>
    )
}

export default App7;