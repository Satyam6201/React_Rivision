import { useState } from "react"
import Form from "./components/Form-Handling"
import Nav2 from "./components/useContext/Nav2"
import Navbar from "./components/useContext/Navbar"
import UseEffectFil from "./components/UseEffectFil"
import UseStateFil from "./components/UseStateFil"
import Button from "./components/useContext/Button"

const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <div>
        {/* <UseStateFil /> */}
        
        {/* <Form /> */}

        {/* <UseEffectFil /> */}

        <Navbar />
        <Button />
    </div>
  )
}

export default App