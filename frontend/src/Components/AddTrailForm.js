import './AddTrailForm.css'
import { useState } from 'react'

function AddTrailForm ({ toggleAdding, addTrail }) {
    const [name, setName] = useState("")
    const [length, setLength] = useState("")
    const [gain, setGain] = useState("")
    const [description, setDescription] = useState("")
    const [url, setUrl] = useState("")
    const [thumb, setThumb] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        const trail = {
            "name": name,
            "url": url,
            "thumbUrl": thumb,
            "length": parseInt(length),
            "elevationGain": parseInt(gain),
            "description": description
        }

        addTrail(trail)
        toggleAdding()
    }

    const handleChange = (event) => {
        let { name, value } = event.target
        switch(name) {
            case "trail-name":
                setName(value)
                break
            case "trail-url":
                setUrl(value)
                break
            case "trail-thumb-url":
                setThumb(value)
                break
            case "trail-length":
                setLength(value)
                break
            case "elevation-gain":
                setGain(value)
                break
            case "description":
                setDescription(value)
                break
            default:
                return null
        }

    }

    return(
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                name="trail-name"
                id="trail-name"
                placeholder="TRAIL NAME"
                value={ name }
                onChange={ handleChange } />
            <label>Trail Name</label>
            <input
                type="url"
                name="trail-url"
                id="trail-url"
                placeholder="URL"
                value={ url }
                onChange={ handleChange } />
            <label>Trail URL</label>
            <input
                type="tumbUrl"
                name="trail-thumb-url"
                id="trail-thumb-url"
                placeholder="TRAIL THUMB URL"
                value={ thumb }
                onChange={ handleChange } />
            <label>Trail Name</label>
            <input
                type="number"
                name="trail-length"
                id="trail-length"
                placeholder="TRAIL LENGTH IN MILES"
                value={ length }
                onChange={ handleChange } />
            <label>Trail Length</label>
            <input
                type="number"
                name="elevation-gain"
                id="elevation-gaim"
                placeholder="ELEVATION GAIN IN FEET"
                value={ gain }
                onChange={ handleChange } />
            <label>Elevation Gain</label>
            <input
                type="textarea"
                name="description"
                id="description"
                placeholder="DESCRIPTION"
                value={ description }
                onChange={ handleChange } 
                className="description-input"/>
            <label>Description</label>
            <input type="submit" />
        </form>
    )
}

export default AddTrailForm