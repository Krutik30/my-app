import { useState } from "react";
import './App10.css';

function App10(){

    const [inputText , setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event){
        setInputText(event.target.value);
    }

    function addItem(){
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });

        setInputText("");
    }


    return (
        <div className="container">
            <div>
                <div className="heading">
                    <h1 className="text-center">To-Do List</h1>
                </div>
                <div className="form text-center"> 
                    <input onChange={handleChange} type="text" value={inputText} />
                    <button onClick={addItem} className="btn1">
                        <span>Add</span>
                    </button>
                </div>
            </div>
            <div class="item">
                <ul>
                    {items.map((todoItem) => <li>{todoItem}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default App10;