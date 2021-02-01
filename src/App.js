import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/custom.scss"
import { Container } from 'react-bootstrap';
import {
  HashRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from "./pages/Home/Home.js"
import Header from "./components/Header/Header.js"
import Stores from "./pages/Stores/Stores.js"
import AboutUs from "./pages/AboutUs/AboutUs.js"
import Contacts from "./pages/Contacts/Contacts.js"
import Documents from './pages/Documents/Documents';



function App() {
  return (
    <div className="app">
      <Router basename="/">
        <Container fluid className="layout">
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
              <Stores />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/stores">
              <Stores />
            </Route>
            <Route path="/documents">
              <Documents />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div >
  );
}

export default App;
