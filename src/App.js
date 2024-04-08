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
   <nav>
   <div className='header-div'>
   <Header/>
   </div>
   </nav>
   <main>
   <div className='contacts'>
    <Contacts name = "shivam" number="xyz"/>
    <Contacts name = "shahil" number="abc"/>
    <Contacts name = "pranam" number="def"/>
   </div>
   </main>
   </>
  )
}

export default App;
