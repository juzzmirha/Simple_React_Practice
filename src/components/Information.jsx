import {differences} from '../data'
import { useState } from 'react'
import Button from './Button/Button'



export default function Information(){
    const [content, setContent] = useState(null)

    function handleClick(type){
      setContent(type)
    }
    return(
        <section>
          <h3 className='title'>Чем мы отличаемся от других</h3>
          <Button isActive={content === 'way'}  onClick={() => handleClick('way')}>Approach</Button>
          <Button isActive={content==='easy'} onClick={() => handleClick('easy')}>Availability</Button>
          <Button isActive={content==='program'} onClick={() => handleClick('program')}>Concentration</Button>

          
          {content ? (<p className='text'>{differences[content]}</p>) : (<p className='text'>Click the button</p>)}
        </section>
    )
}