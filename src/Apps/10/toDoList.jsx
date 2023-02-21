import React from 'react';

function ToDoItem(prop){

    return (
        <div className='d-flex justify-content-between'>
            <li className=''>{prop.text}</li>
            <input className='' type={'checkbox'}  
                onClick={() => {
                    prop.onChecked(prop.id);
                }} 
            />
        </div>
    )
}

export default ToDoItem;