
import React,{useState} from "react";
import './../styles/App.css';
import Input from "./Input";
// import { is } from "cypress/types/bluebird";
const App = () => {
  const [isLoggedIn,setisLoggedIn] = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {
             isLoggedIn === true ? <p>You are logged in!</p> :<Input isLoggedIn={isLoggedIn} setIsLoggedIn={setisLoggedIn}/>
        }
    </div>
  )
}

export default App
