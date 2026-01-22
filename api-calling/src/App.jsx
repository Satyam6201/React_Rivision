import axios from 'axios'
import { useState } from 'react';
import UseEffect_basic from './components/useeffect/useEffect_basic';
import Api from './components/Apis/Api';

const App = () => {

  // fetch the data by using async and await

  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const data = await response.json();
  //   console.log(data)
  // }

  return (
    <div>
      {/* <UseEffect_basic /> */}
      
      <Api />
    </div>
  )
}

export default App