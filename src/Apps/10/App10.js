import { useState } from "react";
import ToDoItem from "./toDoList";
import './App10.css';
import schedule from 'node-schedule';
import axios from 'axios';

function App10() {

    
    schedule.scheduleJob('* * * * *', async function(){
        axios.get('/').then(res => console.log(res));
    })
  

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function addItem() {
        setItems((prevItems) => {

            if(!/^\s*$/.test(inputText) && inputText !== '')
                return [...prevItems, inputText];
            return prevItems;
        });

        setInputText("");
    }

    function deleteItem(id){
        setItems(prevItems => {
            return prevItems.filter((item , index) => {
                return index !== id;
            });
        });
    }


    return (
        <div className="container">
            <div>
                <div className="heading">
                    <h1 className="text-center">To-Do List</h1>
                </div>
                <div className="form text-center d-flex">
                    <input onChange={handleChange} type="text" value={inputText} />
                    <button onClick={addItem} className="btn1">
                        <span>Add</span>
                    </button>
                </div>
            </div>
            <div class="item">
                <ul>
                    {items.map((todoItem , index) =>
                        <ToDoItem
                            key = {index}
                            id = {index}
                            text = {todoItem}
                            onChecked = {deleteItem}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default App10;