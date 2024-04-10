// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Contacts from "./Components/Contacts"
import contacts from "./ContactList"
import Login from "./Components/Login"
import { useState } from 'react';

// here App is a component which is added in index.js


const App = ()=>{ 

  const[userVal,SetuserVal] = useState("")
  const[passVal,SetpassVal] = useState("")

  // const userId = document.getElementById("input-user")
  // const PassId = document.getElementById("input-pass")

  const ChangeUserVal = (event)=>{
    SetuserVal(event.target.value);
  }

  const ChangePassVal = (event)=>{
    SetpassVal(event.target.value);
  }


  return(
    <>
    <h1>Hello {userVal} {passVal} </h1>
    <form>
      <input placeholder='userId' id="input-user" onChange={ChangeUserVal}></input>
      <input placeholder='password' id="input-pass" onChange={ChangePassVal}></input>
      <button>Login</button>
    </form>
    </>
  )
}

export default App;
