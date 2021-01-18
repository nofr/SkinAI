import Modal from 'react-modal';
import { useContext } from 'react'
import {Button} from 'react-bootstrap'
import { Authentication } from '../../Contexts/Authentication'
import '../../Components/NavBar/Navbar.css'

const LogoutModal = (props) => {
    const {isLogged, setIsLogged} = useContext(Authentication)

    const logOut = () => {
        setIsLogged(false)
        localStorage.clear()
        props.setIsLogoutOpen(false)
    }

    return (
        <Modal
        isOpen={props.isLogoutOpen}
        onRequestClose={() => props.setIsLogoutOpen(false)}
        style={props.modalStyle}
        contentLabel="Example Modal"
        closeLogin={() => props.setIsLogoutOpen(false)}
          >
        <div className='logout-modal'>
            <h2>Are you sure ?</h2>
            <Button className='login-btn' onClick={logOut}> Logout </Button>
            <Button className='login-btn' onClick={() => props.setIsLogoutOpen(false)}> Close </Button>
        </div>
        </Modal>
    )
}

export default LogoutModal