// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Contacts from "./Components/Contacts"
import contacts from "./ContactList"
import Login from "./Components/Login"
import { useState } from 'react';

// here App is a component which is added in index.js


const App = ()=>{

  const [FullName,SetFullName] = useState({
    fName : "",
    lName : ""
  })

  const HandleChange = (event)=>{

    const newValue = event.target.value
    const Name = event.target.name

    // if(Name == "first-name"){
    //   SetFullName({fname : newValue})
    //   console.log(event.target.value)
    // }
    // else{
    //   SetFullName({lname : newValue})
    //   console.log(event.target.value)
    // }

    SetFullName((prevVal)=>{
      if(Name == "first-name"){
        return {
          fname : newValue,
          lname : prevVal.lname
        }
      }
      else{
        return {
          lname : newValue,
          fname : prevVal.fname
        }
      }
    })

  }

  return(
    <>
    <h1>Hello {FullName.fname} {FullName.lname}</h1>
    <form>
      <input placeholder='First Name' id="Fname-Id" onChange={HandleChange} name="first-name"></input>
      <input placeholder='Last Name' id="Lname-Id" onChange={HandleChange} name = "last-name"></input>
      <button>Login</button>
    </form>
    </>
  )
}

export default App;
