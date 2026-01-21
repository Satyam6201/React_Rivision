import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffectFil = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("UseEffect is Running...")
    }, [count])  //[] is a dependency array if [] is like this the run only once 
    // if [count] then it run every count change

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => {
            setCount(count+1)
        }}>Click</button>
    </div>
  )
}

export default UseEffectFil
