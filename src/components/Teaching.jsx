import WayToTeach from "./WayToTeach"
import {ways} from '../data'
import '../App.css'



export default function Teaching(){
    return(
        <section>
          <h3 className='title'>Наш подход к обучению</h3>

          <ul className='list_elements'>
            {ways.map((way) => 
            (<WayToTeach key={way.title} {...way}/>)
            )}
          </ul>
        </section>
    )
}