import { useEffect, useState } from "react";
import Form from "./components/Form-handing-project/Form"
import Section from "./components/Section1/Section"
import Section2 from "./components/Section2/Section2"
import axios from 'axios';
import Card from "./components/UseEffect_Project/card";
import MainFil from "./components/UseEffect_Project/MainFil";

const App = () => {

  // let content = [
  //   {
  //     img: "https://imgs.search.brave.com/6KayauW3r33WN5xR8btyTCyE7_ioU3wBELT_O60--Ac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTI1/MTgyOC9wZXhlbHMt/cGhvdG8tMTI1MTgy/OC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
  //     intro: "I’m a dedicated software developer who enjoys solving real-world problems and building clean, user-friendly applications.",
  //     tag: "Satisfied",
  //     color: "royalblue"
  //   },
  //   {
  //     img: "https://imgs.search.brave.com/kT8110H9Jl_qwY-3NHxZFhNFkINp-TO6feaeZmy2D2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/MTQwOTcxMy9waG90/by9wb3J0cmFpdC1v/Zi1hLWNvbmZpZGVu/dC15b3VuZy1idXNp/bmVzc21hbi13b3Jr/aW5nLWluLWEtbW9k/ZXJuLW9mZmljZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MlptN1RBN0NFYjB1/dkdIQnh0N2JNV3pa/UTd6UXFSUWI2eFpk/RE80NkZKMD0",
  //     intro: "I’m a motivated and detail-oriented person with a passion for learning, teamwork, and continuous self-improvement.",
  //     tag: "Underserved",
  //     color: "lightseagreen"
  //   },
  //   {
  //     img: "https://imgs.search.brave.com/6vYkOGvt1X2AIFTqqkpBXSAO0wJ2YyjOazhhFIiwlZs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE3/NDM2MzMxNC9waG90/by9idXNpbmVzc21h/bi1sb29raW5nLWF0/LWNhbWVyYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cm0w/c2Q3WUk2T3hSa0xC/MXFYSnhoZi1ubDlr/Z0xCUTdZeUxRaERT/WUJYdz0",
  //     intro: "I’m a curious and hardworking individual who believes in discipline, smart work, and consistent growth.",
  //     tag: "Underbanked",
  //     color: "orange"
  //   },
  // ]
  
    
  return (

    <div>
    {/*   <Section user={content} />
          <Section2 /> */}

    {/* Form-Handing Project */}
    {/*    <Form /> */}

      {/* useEffect Gallary Project */}
      <MainFil/>
   </div>
  )
}

export default App