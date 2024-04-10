// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Contacts from "./Components/Contacts"
import contacts from "./ContactList"
import Login from "./Components/Login"
import { useState } from 'react';

// here App is a component which is added in index.js


const App = ()=>{

  
    setTimeout(()=>{
      // SetTime(new Date().toLocaleTimeString())
      getTime()
    },1000)
  
 
  const [time,SetTime] = useState(new Date().toLocaleTimeString()); 

  const getTime = ()=>{
    SetTime(new Date().toLocaleTimeString())
  }

  

  return(
    <>
    <h1>{time}</h1>
    <button onClick={getTime}>Time</button>
    </>
  )
}

export default App;
