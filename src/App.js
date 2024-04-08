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

  const list = [1,2,3,4,5];

  list.map((num)=>{
    console.log(num);
  })

  return (
   <>
   <nav>
   <div className='header-div'>
   <Header/>
   </div>
   </nav>
   <main>
   <div className='contacts'>
    {
      contacts.map((details)=>{
        return <Contacts key = {details.id} name={details.name} number={details.number}/>
        // here,whenever a loop is used we should be using a key with it.
      })
    }
   </div>
   </main>
   </>
  )
}

export default App;
