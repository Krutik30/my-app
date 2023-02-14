import React from "react";
import Input from "./input";

function Login(props){
    return (
            <form className="from">
                <Input 
                    type = "text"
                    placeholder = "Username"
                />
                <Input 
                    type = "password"
                    placeholder = "New Password"
                />
                {
                    !props.isReg && <Input 
                        type = "password"
                        placeholder = "Confirm Password"
                    />
                }
                <button className='com' type="submit">
                    {props.isReg ? "Login" : "Register"}
                </button>
            </form>
    )
}

export default Login;