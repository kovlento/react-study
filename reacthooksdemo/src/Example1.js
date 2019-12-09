import React, { useState, createContext, useContext } from 'react';

const countContext = createContext()

function Counter(){
  let count = useContext(countContext)
  return (
    <h2>{count}</h2>
  )
}

function Example1(){
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>点击了{count} times</p>
      <button onClick={()=>{setCount(count+1)}}>点击</button>
      <countContext.Provider value={count}>
        <Counter></Counter>
      </countContext.Provider>
    </div>
  )
}
 
export default Example1;