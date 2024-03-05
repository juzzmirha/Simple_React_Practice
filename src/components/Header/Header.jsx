import { useEffect, useState } from "react"
import './Header.css'
import {styled} from 'styled-components'
 
 export default function Header(){
    const [now, setNow] = useState(new Date())

    useEffect(() =>{
        const interval = setInterval(function(){ setNow(new Date())}, 1000)

        return() =>{
            clearInterval(interval)
        }
    }, [])
    return(
        <div>
            <header>
                <h3>MXRXSS University</h3>
                <span>{now.toLocaleTimeString()}</span>
            </header>
            <hr />
        </div>
        

    )
 }