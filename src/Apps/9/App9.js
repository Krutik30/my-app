import { useState } from "react";

function App9(){
    const [contact , setContact] = useState({
        fname: "",
        lname: "",
        email: ""
    });

    function handleChange(event){
        const {name , value} = event.target;

        setContact((prev) => {

            return {
                ...prev,
                [name] : value // name khali vaparie to string ma read kare 
                // ane navu prop banave 
                // pan aam [] syntax thi upar no object key tarike read kare
            }

            // if(name === "fname"){
            //     return {
            //         fname: value,
            //         lname: prev.lname,
            //         email: prev.email
            //     }
            // }else if(name === "lname"){
            //     return {
            //         fname: prev.fname,
            //         lname: value,
            //         email: prev.email
            //     }
            // }else if(name === "email"){
            //     return {
            //         fname: prev.fname,
            //         lname: prev.lname,
            //         email: value
            //     }
            // }
        })
    }

    return (
        <div>
            <h1>Hello, {contact.fname} {contact.lname}</h1>
            <p>{contact.email}</p>
            <form >
                <input onChange={handleChange} className="d-block" name="fname" type="text" placeholder="first name" />
                <input onChange={handleChange} className="d-block" name="lname" type="text" placeholder="last name" />
                <input onChange={handleChange} className="d-block" name="email" type="email" placeholder="Your email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App9;