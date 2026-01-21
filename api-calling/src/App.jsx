import axios from 'axios'
import { useState } from 'react';

const App = () => {

  // fetch the data by using async and await

  // async function getData() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const data = await response.json();
  //   console.log(data)
  // }

  const [data, setdata] = useState([]);

  const getData = async () => {
    // const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    // console.log(res)

    const res = await axios.get('https://picsum.photos/v2/list');
    setdata(res.data)
  }

  return (
    <div>
      <button onClick={getData}>Click</button>
      <p>
        {data.map(function(item, index){
        return <h3>hello {item.author} {index}</h3>
      })}</p>
    </div>
  )
}

export default App
