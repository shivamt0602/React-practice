// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Contacts from "./Components/Contacts"
import contacts from "./ContactList"
import Login from "./Components/Login"
import { useState,useEffect } from 'react';

// here App is a component which is added in index.js


const App = ()=>{


  const[Reference,SetReference] = useState("Posts")

  const HandleChange = (event)=>{


    const Name = event.target.name
    const NewVal = event.target.value;

    if(Name == "post"){
      SetReference("Posts")
    }
    else if(Name == "user"){
      SetReference("Users")
    }
    else{
      SetReference("Comments")
    }
  }

  useEffect(()=>{
    console.log("rendered")
  },[])

 

  return(
    <>
     <div>
      <button onClick={HandleChange} name="post">Posts</button>
      <button onClick={HandleChange} name="user">Users</button>
      <button onClick={HandleChange} name="comment">Comments</button>
     </div>
     <h1>{Reference}</h1>
    </>
  )
}

export default App;
