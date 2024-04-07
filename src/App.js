// import logo from './logo.svg';
import './App.css';
import Heading from "./Heading"
import List from "./Components/List"

// here App is a component which is added in index.js

// const Heading = ()=>{
//   return <h1>Hello this is intro to components</h1>
// }

const App = ()=>{

  const name = "shivam";
  const image_url ="https://picsum.photos/id/237/200/300" ;

  return (
   <>
   <image src={image_url} />
   {/* <h1>Hello</h1> */}
   <Heading/>
   <List/>
   </>
  )
}

export default App;
