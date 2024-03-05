import { useState } from 'react'
import './Feedback.css'
import Button from '../Button/Button'

export default function Feedback(){

    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [reason, setReason] = useState('help')

    function handleChange(event){
        setName(event.target.value)
        setError(event.target.value.trim().length === 0)
    }

    return(
        <section className='feedback'>
            <h3>Обратная Связь</h3>
            <label htmlFor="name">Ваше имя</label>
            <input 
            type="text" 
            id='name' 
            className='control' 
            style={{
                border: error ? '2px solid red' : null
            }}
            value={name} onChange={handleChange}/>

            <label htmlFor="reason">Причина обращения</label>
            <select id="reason" className='control' value={reason} onChange={(event) => setReason(event.target.value)}>
                <option value="error">Ошибка</option>
                <option value="help">Нужно помощь</option>
                <option value="suggest">Предложение</option>
            </select>
            <Button disabled = {error} isActive={!error}>Submit</Button>

            
        </section>
    )
}