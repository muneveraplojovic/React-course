import { useContext } from "react";
import { Context } from "./UserContex";


const App=()=> {

const[user,setUser]=useContext(Context)
// counter
  return (
   <div>
    <button onClick={()=>{
      setUser(user - 1)
    }}> - </button>

    <h1>{user}</h1>

    <button onClick={()=>{
      setUser(user + 1)
    }}> + </button>

  <button onClick={()=>{
      setUser(user + 1)
    }}> + </button>

   </div>

   import React from 'react'
   
   function App() {
     return (
       <div>App</div>
     )
   }
   
   export default App
  )
}

export default App