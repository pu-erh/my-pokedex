import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  getAllPokemons() {
    setTimeout(() => {
    fetch('http://localhost:4242/pokemons/001').then(response => {
      response.json().then(data => {
        this.setState({user: data })
      })
    })
  }, 5000)
  }

  componentDidMount() {
    this.getAllPokemons()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to my Pokedex
          </p>
            User {JSON.stringify(this.state.user)}
        </header>
      </div>
    );
  }
}

export default App;
