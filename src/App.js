// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Contacts from "./Components/Contacts"
// here App is a component which is added in index.js

// const Heading = ()=>{
//   return <h1>Hello this is intro to components</h1>
// }

const App = ()=>{

  return (
   <>
   <div className='header-div'>
   <Header/>
   </div>
   <div className='contacts'>
    <Contacts name = "Shivam"/>
    <Contacts name = "Shahil"/>
    <Contacts name = "Shivam"/>
   </div>
   </>
  )
}

export default App;
