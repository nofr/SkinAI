import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About/About";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/prediction"></Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
