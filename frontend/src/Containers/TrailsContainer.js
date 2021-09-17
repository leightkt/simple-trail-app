import './TrailsContainer.css'
import TrailCard from "../Components/TrailCard"

function TrailsContainer ({ trails }) {

    const displayTrails = () => {
        return trails.map(trail => <TrailCard trail={trail}/>)
    }

    return(
        <section className="trails-container">
            { displayTrails() }
        </section>
    )
}

export default TrailsContainer