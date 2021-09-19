import './App.css';
import { Component } from 'react'
import Header from './Components/Header';
import TrailsContainer from './Containers/TrailsContainer';

const backendURL = 'http://localhost:9000/'

class App extends Component {
  state = {
    trails: []
  }
  
  componentDidMount() {
    this.fetch_trails()
  }

  fetch_trails = () => {
    fetch(`${backendURL}trails`, {
      method: "GET"
    })
    .then(response => response.json())
    .then(trails => this.setTrails(trails))
  }

  setTrails = (trails) => {
    this.setState({ trails} )
  }

  addTrail = (trail) => {
    const foundtrail = this.state.favorites.find(tr => tr === trail)
    if(!foundtrail) {
      this.setState({
        trails: [...this.state.trails, trail]
      })
    }

    fetch(`${backendURL}trails`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content_Type": "application/json"
      },
      body: JSON.stringify({
        trail
      })
      .then(response => response.json())
      .then(result => console.log(result))
    })
  }

  deleteTrail = (trail) => {
    const trails = this.state.trails.filter(tr => tr !== trail)
    this.setState({ trails })

    fetch(`${backendURL}trails/${trail.id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(result => console.log(result))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TrailsContainer trails={ this.state.trails } deleteTrail={ this.deleteTrail }/>
      </div>
    );
  }
  
}

export default App;
