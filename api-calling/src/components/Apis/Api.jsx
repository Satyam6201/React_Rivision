import { use, useEffect, useState } from 'react'

const Api = () => {

  const [ userData, setUserData ] = useState([]);

  const getUserData = async () => {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response.users);
  }

  useEffect(() => {
    getUserData();
  }, []);

  console.log(userData)

  return (
    <div>
      <h1>Fetch Data from Api</h1>
      {
        userData && userData.map((user) => (
          <ul>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default Api
