
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let[name,setName]=useState("");
  function addText(e){
    setName(e.target.value);
  }
  return (
    <div>
      <p>Enter your name:</p>
      <input type="text" onChange={addText}/>
      {
         name.length>0 && <p className="pTag">Hello {name}!</p>
      }
      

        {/* Do not remove the main div */}
    </div>
  )
}

export default App
