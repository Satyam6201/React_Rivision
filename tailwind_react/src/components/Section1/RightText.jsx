import React from 'react'
import RightCard from './RightCard'

const RightText = (props) => {
  return (
    <div  className='h-full flex flex-nowrap gap-10 rounded-4xl w-2/3 p-6'>
      {props.user.map((item, index)=> {
        return <RightCard key={index} id ={index + 1} img={item.img} intro={item.intro} tag={item.tag} color={item.color} />
      })}
    </div>
  )
}

export default RightText
