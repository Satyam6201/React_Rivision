import React from 'react'
import "../style/Card.css"
// import style from '../style/Card.css'

const Card = (props) => {
  function inputChange(value) {
    console.log(value)
  }
  return (
    <div className='card'>
    {/* <div className={style.card}> */}

      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <p>{props.rollNo}</p>
      <p>{props.branch}, {props.course}</p>
      <p>{props.semester}, {props.year}</p>
      <p>{props.college} , {props.location}</p>
      <button>Edit</button>

      <input onChange={function(val){
        inputChange(val.target.value)
      }} type="text" />
    </div>
  )
}

export default Card