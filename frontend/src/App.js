import './App.css';
import { Component } from 'react'
import Header from './Components/Header';
import TrailsContainer from './Containers/TrailsContainer';
import FormContainer from './Containers/FormContainer';

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
    fetch(`${backendURL}trails`, {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(trail)
    })
    .then(response => response.json())
    .then(result => {
      this.setState({
        trails: [...this.state.trails, result[0]]
      })
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
        <FormContainer addTrail={ this.addTrail }/>
        <TrailsContainer trails={ this.state.trails } deleteTrail={ this.deleteTrail }/>
      </div>
    );
  }
  
}

export default App;
