// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Contacts from "./Components/Contacts"
import contacts from "./ContactList"
import Login from "./Components/Login"

// here App is a component which is added in index.js

// const Heading = ()=>{
//   return <h1>Hello this is intro to components</h1>
// }

const App = ()=>{

  const boolean = false;

  const renderCondiotionally = ()=>{
    if(boolean){
      return <h1>Hello</h1>
    }
    else{
      return (
        <Login/>
      )
    }
  }
  return (
    <>
    <main>
    <div className='div-one flex'>{renderCondiotionally()}</div>
    </main>
    </>
  )
}

export default App;
