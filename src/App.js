import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About/About";
import Navbar from "./Components/NavBar/Navbar";
import { useEffect, useState } from "react";
import { Authentication } from './Contexts/Authentication';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [isLogged, setIsLogged] = useState(null)
  const token = localStorage.getItem('token')

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  })

  return (
    <Authentication.Provider value={{isLogged, setIsLogged}}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/prediction"></Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
    </Authentication.Provider>

  );
}

export default App;
