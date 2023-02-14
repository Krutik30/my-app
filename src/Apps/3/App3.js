import React from "react";


function strike(){
    document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike(){
    document.getElementById("root").style.textDecoration = null;
}

function App3(){

    return (
        <div>
            <p>Buy Milk</p>
            <button onClick={strike} >Change to Strike through</button>
            <button onClick={unStrike} >Change back</button>
        </div>
    )
}

export default App3;

// have khali function ma isdone nu badli daie etale
// ready aapdu kam thai gyu
// na evu nai thay
// aapde ghali ghali render karvu pade to evu thay
// ena meta hook vaparsu