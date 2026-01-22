import { useState } from "react"
import Form from "./components/Form-Handling"
import Nav2 from "./components/useContext/Nav2"
import Navbar from "./components/useContext/Navbar"
import UseEffectFil from "./components/UseEffectFil"
import UseStateFil from "./components/UseStateFil"
import Button from "./components/useContext/Button"
import UseRef from "./components/useRef"

const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <div>
        {/* <UseStateFil /> */}
        
        {/* <Form /> */}

        {/* <UseEffectFil /> */}

        {/* <Navbar />
        <Button /> */}

        <UseRef />
    </div>
  )
}

export default App