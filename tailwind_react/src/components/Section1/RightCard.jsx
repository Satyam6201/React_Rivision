import {ArrowRight} from 'lucide-react'

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl '>
      <img className='h-full w-full object-cover' 
      src={props.img} />
      <div  className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        
        <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>
            {props.id}
        </h2>
        
        <div>
            <p className='text-xl leading-normal text-cyan-50 mb-14'>{props.intro}</p>
            <div className='flex justify-between'>
                <button style={{background: props.color}} className='text-white font-medium px-8 py-3 rounded-full text-lg'>{props.tag}</button>
                <button style={{background: props.color}} className=' text-white font-medium px-4 py-3 rounded-full text-lg'><ArrowRight  /></button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default RightCard
