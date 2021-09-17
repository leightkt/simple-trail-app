import './App.css';
import { Component } from 'react'
import Header from './Components/Header';
import TrailsContainer from './Containers/TrailsContainer';

const backendURL = 'http://localhost:9000/'

class App extends Component {
  state = {
    trails: ""
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

  render() {
    return (
      <div className="App">
        <Header />
        <TrailsContainer trails={ this.state.trails } />
      </div>
    );
  }
  
}

export default App;
