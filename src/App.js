import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Slides from "./Components/Slides/Slides";
import Navbar from "./Components/NavBar/Navbar";
import { useEffect, useState } from "react";
import { Authentication } from './Contexts/Authentication';
import UploadForm from "./Components/UploadForm/UploadForm";
import './App.css'

export const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [isLogged, setIsLogged] = useState(null)
  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token) {
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
            <Route path="/upload">
              <UploadForm/>
            </Route>
            <Route path="/" >
              <div className="my-container">
              <Slides />
              {<Link to='/upload' className='open-upload-form' >
              <div>
                  <div> Upload </div>
              </div>
              </Link>}
              {/* <UploadForm /> */}
              </div>
            </Route>         
        </Switch>
      </Router>
    </Authentication.Provider>
  );
}

export default App;
