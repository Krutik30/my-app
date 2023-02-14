import Login from './login'
import './App2.css';

let isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);

function App2(){
    return (
        <div className="container">
        {
            <Login isReg={isLoggedIn} />

            // currentTime > 12 ? <h1>Why are you still working?</h1> : null

            // currentTime > 12 && <h1>Why are you still working?</h1>


        }
        </div>
    )
}

export default App2;