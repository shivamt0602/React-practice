// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Contacts from "./Components/Contacts"
import contacts from "./ContactList"
// here App is a component which is added in index.js

// const Heading = ()=>{
//   return <h1>Hello this is intro to components</h1>
// }

const App = ()=>{

  return (
   <>
   <nav>
   <div className='header-div'>
   <Header/>
   </div>
   </nav>
   <main>
   <div className='contacts'>
    <Contacts name = {contacts[0].name} number={contacts[0].number}/>
    <Contacts name = {contacts[1].name} number={contacts[1].number}/>
    <Contacts name = {contacts[2].name} number={contacts[2].number}/>
   </div>
   </main>
   </>
  )
}

export default App;
