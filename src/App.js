import logo from './logo.svg';
import './App.css';
import Router from './Routes/Router';
import NavBar from './Components/Navbar/Navbar';
//<a href='/Home' target="_blank">Voy al Home</a>

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
