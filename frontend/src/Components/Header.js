import './Header.css'
import trailImg from '../Assets/trail.jpg'

function Header () {
    return (
        <header>
            <img src={ trailImg } alt="a person walking on a trail"/>
            <h1>Happy Trails</h1>
        </header>
    )
}

export default Header