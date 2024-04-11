// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Contacts from "./Components/Contacts"
import contacts from "./ContactList"
import Login from "./Components/Login"
import { useState } from 'react';

// here App is a component which is added in index.js


const App = ()=>{

  const [Data,SetData] = useState({
    fname : "",
    lname : "",
    Email : ""
  })
 

  const HandleChange = (event)=>{

    const Name = event.target.name
    const newVal = event.target.value

    SetData((prevVal)=>{
      if(Name == "first-name"){
        return {
          fname : newVal,
          lname : prevVal.lname,
          Email : prevVal.Email
        }
      }
      else if(Name == "last-name"){
        return{
          fname : prevVal.fname,
          lname : newVal,
          Email : prevVal.Email
        }
      }
      else{
        return {
          fname : prevVal.fname,
          lname : prevVal.lname,
          Email : newVal
        }
      }
    })

  }

  

  return(
    <>
    <h1>Hello {Data.fname} {Data.lname}</h1>
    <p>{Data.Email}</p>
    <form>
      <input placeholder='First Name' id="Fname-Id" onChange={HandleChange} name="first-name"></input>
      <input placeholder='Last Name' id="Lname-Id" onChange={HandleChange} name = "last-name"></input>
      <input placeholder='Email' id="Email-Id" onChange={HandleChange} name = "email-name"></input>
      <button>Login</button>
    </form>
    </>
  )
}

export default App;
