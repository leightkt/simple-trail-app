import './TrailCard.css'

function TrailCard({ trail, deleteTrail }) {
    const { name, url, thumbUrl, length, elevationGain, description } = trail

    const handleClick = () => {
        deleteTrail(trail)
    }

    return(
        <div className="trails-card">
            <a href={url} ><h2>{ name }</h2></a>
            {thumbUrl ? <img src={ thumbUrl } alt="a pic of a mountain"/> : null}
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