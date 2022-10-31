import './App.css';
import Router from './Routes/Router';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/footer-components/Footer';
import CTAbanner from './Components/footer-components/CTAbanner';
import Headerbar from './Components/featured-components/Headerbar';
import UserInfo from './Components/featured-components/UserInfo';
import UserPrompt from './Components/featured-components/UserPrompt';
//<a href='/Home' target="_blank">Voy al Home</a>

function App(props) {
  const loggedIn = props.loggedIn

  return (
    <div className="App">
      <Router>
        <NavBar>

        </NavBar>
      </Router>
      <Footer>
        <CTAbanner/>
      </Footer>
      
    </div>
  );
}

export default App;
