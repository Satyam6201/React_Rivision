import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className='py-10 flex items-center justify-between gap-10 h-[90vh] px-18'>
      <LeftText />
      <RightText user={props.user} />
    </div>
  )
}

export default Page1Content
