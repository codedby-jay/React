import React, { useState } from 'react'

function App() {

  // let count = 0;

  let [count,setCount] = useState(10);

  console.log("hey ")
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={()=>{
        setCount(++count);  
        console.log(count);
        
      }}>Click</button>
    </div>
  )
}

export default App
