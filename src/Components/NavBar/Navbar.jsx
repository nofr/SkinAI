import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlus,
  faSignInAlt,
  faSignOutAlt,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import LoginModal from "../Modals/LoginModal";
import SignupModal from "../Modals/SignupModal";
import { Authentication } from "../../Contexts/Authentication";
import { confirmLogout } from "../../Tools/WebsiteResponses";
import { Button } from "react-bootstrap";

const Navbar = (props) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const { isLogged, setIsLogged } = useContext(Authentication);

  const sessionID = localStorage.getItem('sessionID');

  const openLogin = () => {
    setIsLoginOpen(true);
  };
  const closeLogin = () => {
    setIsLoginOpen(false);
  };
  const closeSignup = () => {
    setIsSignupOpen(false);
  };
  const handleLogout = () => {
    confirmLogout(setIsLogged);
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "#2b1d13a0",
    },
    content: {
      borderRadius: "13px",
      border: "1px solid black",
      backgroundColor: "whitesmoke",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      zIndex: 3,
    },
  };

  return (
    <div className="nav-container">
      <Link to="/">
        <button className="logo"> SkinAI </button>
      </Link>
      <ul className="nav-links-container">
        <Link to="/">
          <li className="nav-links">
            <FontAwesomeIcon color="#36d68b" icon={faHome} size="2x" />
          </li>
        </Link>
        <Link to="/upload">
          <li className="nav-links">
            <FontAwesomeIcon color="#36d68b" icon={faPlus} size="2x" />
          </li>
        </Link>
        {!isLogged && (
          <li className="nav-links" onClick={openLogin}>
            <Button className="login-btn" variant="secondary">
              Login
            </Button>
          </li>
        )}
        {isLogged && (
          <Link to={`/user/${sessionID}`}>
            <li className="nav-links">
              <FontAwesomeIcon color="#36d68b" icon={faUserMd} size="2x" />
            </li>
          </Link>
        )}
        {isLogged && (
          <li className="nav-links">
            <FontAwesomeIcon
              color="#36d68b"
              onClick={handleLogout}
              icon={faSignOutAlt}
              size="2x"
            />
          </li>
        )}
      </ul>
      <LoginModal
        setIsLoginOpen={setIsLoginOpen}
        setIsSignupOpen={setIsSignupOpen}
        isLoginOpen={isLoginOpen}
        closeLogin={closeLogin}
        modalStyle={modalStyle}
      />
      <SignupModal
        setIsLoginOpen={setIsLoginOpen}
        setIsSignupOpen={setIsSignupOpen}
        isSignupOpen={isSignupOpen}
        closeLogin={closeSignup}
        modalStyle={modalStyle}
      />
    </div>
  );
};

export default Navbar;
