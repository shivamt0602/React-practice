// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Contacts from "./Components/Contacts"
import contacts from "./ContactList"
import Login from "./Components/Login"
import { useState } from 'react';

// here App is a component which is added in index.js


const App = ()=>{
  // let count = 0;
  const [count,setcount] = useState(0)

  const increment = ()=>{
    setcount(count+1)
  }

  return(
    <>
    <h1>{count}</h1>
    <button onClick={increment}>Add</button>
    </>
  )
}

export default App;
