import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faSignInAlt, faSignOutAlt, faUserMd } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useState, useContext } from 'react'
import LoginModal from '../Modals/LoginModal'
import SignupModal from '../Modals/SignupModal' 
import LogoutModal from '../Modals/LogoutModal'
import { Authentication } from '../../Contexts/Authentication';

const Navbar = (props) => {
    const [isLoginOpen,setIsLoginOpen] = useState(false);
    const [isSignupOpen,setIsSignupOpen] = useState(false);
    const [isLogoutOpen,setIsLogoutOpen] = useState(false);
    const {isLogged, setIsLogged} = useContext(Authentication)

    const openLogin = () => {
        setIsLoginOpen(true)
    }
    const closeLogin = () => {
        setIsLoginOpen(false)
    }
    const closeSignup = () => {
        setIsSignupOpen(false)
    }
    const handleLogout = () => {
        setIsLogoutOpen(true)
    }
    
    const modalStyle = {
        overlay: {
            backgroundColor     : '#2b1d13a0'
        },
        content : {
          borderRadius          : '13px',
          border                : '1px solid black',
          backgroundColor       : 'whitesmoke',
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          display               : 'flex',
          flexDirection : 'column',
          justifyContent : 'center'
        }
      };

    return (
        <div className="nav-container">
            <div className="logo"> SkinAI </div>
            <ul className="nav-links-container">
                <Link to="/"> 
                    <li className="nav-links"><FontAwesomeIcon color='#36d68b' icon={faHome} size="2x"/></li>
                </Link>
                {!isLogged && <li className="nav-links" onClick={openLogin}><FontAwesomeIcon color='#36d68b' icon={faSignInAlt} size="2x"/></li>}
                {isLogged && <Link to='/'> 
                    <li className="nav-links"><FontAwesomeIcon color='#36d68b' icon={faUserMd} size="2x"/></li>
                </Link>}
                {isLogged && 
                    <li className="nav-links"><FontAwesomeIcon color='#36d68b' onClick={handleLogout}icon={faSignOutAlt} size="2x"/></li>
                }
            </ul>
            <LoginModal setIsLoginOpen={setIsLoginOpen} setIsSignupOpen={setIsSignupOpen} isLoginOpen={isLoginOpen} closeLogin={closeLogin} modalStyle={modalStyle}/>
            <SignupModal setIsLoginOpen={setIsLoginOpen} setIsSignupOpen={setIsSignupOpen} isSignupOpen={isSignupOpen} closeLogin={closeSignup} modalStyle={modalStyle}/>
            <LogoutModal setIsLogoutOpen={setIsLogoutOpen} isLogoutOpen={isLogoutOpen} modalStyle={modalStyle}/>            
        </div>
    )
}

export default Navbar 