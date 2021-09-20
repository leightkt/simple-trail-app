import './FormContainer.css'
import { useState } from 'react'
import AddTrailForm from '../Components/AddTrailForm'

function FormContainer ({ addTrail }) {
    const [adding, setAdding] = useState(false)
    
    const handleClick = () => {
        toggleAdding()
    }

    const toggleAdding = () => {
        setAdding(!adding)
    }

    return(
        <section className="trails-form-container">
            { adding ? 
                <>
                <AddTrailForm toggleAdding={ toggleAdding } addTrail={ addTrail } handleClick={ handleClick }/>
                <button onClick={ handleClick } className="back-button">GO BACK</button>
                </> : 
                <button onClick={ handleClick } className="add-button">Add New Trail</button> } 
        </section>
    )
}

export default FormContainer