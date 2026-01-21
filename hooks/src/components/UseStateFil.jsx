import { useState }  from 'react'

const UseStateFil = () => {

  // UseState 

  // const [count, setCount] = useState(0);
  // function increse() {
  //   setCount(count+1)
  // }
  // function decrese() {
  //   setCount(count-1)
  // }
  // function jumpByFive() {
  //   setCount(count+5)
  // }

    // For object in UseState

  // const [user, setUser] = useState({
  //   name: "Satyam",
  //   age: 21,
  // });

    // let change = ()=> {
    // const newUser = {...user};
    // console.log(newUser);  // name: "Satyam", age: 21
    // newUser.name = "Utsav";
    // newUser.age = 22;
    // setUser(newUser)
    // console.log(newUser); // name: Utsav, age: 22

    // Bathch Update Method
  //   setUser(prev => ({...prev, branch: "CSE"}));  // name is same but age will be change
  // }


    // For array
    
    const [user, setUser] = useState(["satyam", "utsav", "shivam", "shashank"]);

    let change = () => {
      let newUser = [...user];
      console.log(newUser);

      newUser.push("Rohit");
      setUser(newUser);
      
      console.log(newUser);
    }

  return (
    <div>

      {/* <h1>{count}</h1>
      <button onClick={increse}>Increment</button>  
      <button onClick={decrese}>Decerement</button>  
      <button onClick={jumpByFive}>Jump By 5</button>   */}

      {/* <h1>{user.name}, {user.age}</h1> */}

      {/* <h1>{user.name}, {user.age}, {user.branch}</h1> */}

      <h1>{user}</h1>

      <button onClick={change}>Click</button>
    </div>
  )
}

export default UseStateFil
