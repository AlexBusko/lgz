import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/custom.scss";
import { Container } from "react-bootstrap";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Header from "./components/Header/Header.js";
import Stores from "./pages/Stores/Stores.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Contacts from "./pages/Contacts/Contacts.js";
import Documents from "./pages/Documents/Documents";
import Production from "./pages/Production/Production";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Router basename="/">
        <Container fluid className="layout">
          <Header />
          <Sidebar />
          <Switch>
            <Route exact path="/production">
              <Production />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
            <Route exact path="/stores">
              <Stores />
            </Route>
            <Route exact path="/documents">
              <Documents />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
