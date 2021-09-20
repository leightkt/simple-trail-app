import './Search.css'

function Search({ elevation, setElevation  }) {
    const handleChange = (event) => {
        const { value } = event.target
        setElevation(value)
    }

    return(
        <form className="search-form">
            <input
                type="number"
                name="elevation-gain-search"
                id="elevation-gain-search"
                placeholder="ELEVATION GAIN IN FEET"
                value={ elevation }
                onChange={ handleChange } />
            <label>Search By Elevation Gain</label>
        </form>
    )
}

export default Search