import { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null);

    const inputHandler = () => {
        console.log(inputRef);
        inputRef.current.style.color = 'black'
        inputRef.current.style.background = 'red'

    }

  return (
    <>
      <h1>UseRef</h1>
      <input ref={inputRef} type="text" />
      <button onClick={inputHandler}>Focus on input field</button>
    </>
  )
}

export default UseRef
