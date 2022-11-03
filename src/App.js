import './App.css';
import Router from './Routes/Router';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/footer-components/Footer';
import CTAbanner from './Components/footer-components/CTAbanner';
import Headerbar from './Components/featured-components/Headerbar';
import UserInfo from './Components/featured-components/UserInfo';
import UserPrompt from './Components/featured-components/UserPrompt';
import Toggle from './Components/Interruptor';
//<a href='/Home' target="_blank">Voy al Home</a>

function App(props) {
  const loggedIn = props.loggedIn

  function myAlert() {
    alert("Se apreoto Boton!")
  }

  return (
    <div className="App">
      <Router>
        <NavBar>
        </NavBar>
      </Router>
      <Toggle></Toggle>
      <button onClick={ () => myAlert() }> Alerta</button>
      <Footer>
        <CTAbanner/>
      </Footer>
      
    </div>
  );
}

export default App;
