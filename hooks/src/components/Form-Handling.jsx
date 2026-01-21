import { useState } from 'react';

const Form = () => {

    const [title, setTitle] = useState('')

    const submitHandler = (e) => {
        e.preventDefault(); //Stop page reload
        console.log("Form is submited by", title)
        setTitle('')
    }
    
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='enter your first name'
        value={title} 
        onChange={(e) => {
            setTitle(e.target.value);
        }} />
        <button>Submit</button>

      </form>
    </div>
  )
}

export default Form
