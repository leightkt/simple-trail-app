import './TrailsContainer.css'
import TrailCard from "../Components/TrailCard"

function TrailsContainer ({ trails, deleteTrail }) {
    const displayTrails = () => {
        return trails.map(trail => <TrailCard trail={trail} deleteTrail={ deleteTrail }/>)
    }

    return(
        <section className="trails-container">
            { displayTrails() }
        </section>
    )
}

export default TrailsContainer