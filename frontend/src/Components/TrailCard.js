import './TrailCard.css'

function TrailCard({ trail }) {

    return(
        <div className="trails-card">
            <h2>{ trail.name }</h2>
            <p>{ trail.length } Miles</p>
            <p>{ trail.elevationGain } Feet</p>
            <p>{ trail.description }</p>
        </div>
    )
}

export default TrailCard