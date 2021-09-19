import './TrailCard.css'

function TrailCard({ trail, deleteTrail }) {
    const { name, length, elevationGain, description } = trail

    const handleClick = () => {
        deleteTrail(trail)
    }

    return(
        <div className="trails-card">
            <h2>{ name }</h2>
            <div className="details">
                <p>{ length } Miles</p>
                <p>{ elevationGain } Feet</p>
            </div>
            <p>{ description }</p>
            <button onClick={ handleClick }>Delete</button>
        </div>
    )
}

export default TrailCard