import React, { useState } from 'react';

function Example(){
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>点击了{count} times</p>
      <button onClick={()=>{setCount(count+1)}}>点击</button>
    </div>
  )
}
 
export default Example;