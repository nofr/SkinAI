import axios from 'axios'
import { useContext, useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import {BASE_URL} from '../../App'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Authentication } from '../../Contexts/Authentication'
import Modal from 'react-modal';
import { signInSuccess } from '../../Tools/WebsiteResponses';
import url from '../../Tools/URLs';

const LoginModal = (props) => {
    const [input, setInput] = useState(null) // Get input
    const [error, setError] = useState(null) // Handle error from API

    const {isLogged, setIsLogged} = useContext(Authentication) 

    const handleChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
    }

    const logIn = (e) => {
        e.preventDefault()
        axios.post(`${url}/login`, input)
        .then(res => {
            if (res.status === 200) {
                signInSuccess()
                setIsLogged(true);
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('sessionID', res.data.user._id)
            }
            props.setIsLoginOpen(false)
        })
        .catch(err => {
            if(err.response.status === 409) {
                setError(err.response.data.message)
            }
        })
    }

    const errorStyle = {
        color: '#d10000', 
        fontSize: '18px', 
        margin: '10px', 
        padding: '7px',
        borderRadius: '9px',
        backgroundColor: 'whitesmoke'
    }

    const goToSignup = () => {
        props.setIsLoginOpen(false)
        props.setIsSignupOpen(true)
    }

    return (
        <Modal
          isOpen={props.isLoginOpen}
          onRequestClose={props.closeLogin}
          style={props.modalStyle}
          contentLabel="Example Modal"
          closeLogin={props.closeLogin}
            >
            <span onClick={() => props.setIsLoginOpen(false)} className='modal-close-btn'><FontAwesomeIcon icon={faTimes}/></span>
            <h2 style={{textAlign: 'center', color: '#434343'}}>Login</h2>
            <Form className ='login-form' onSubmit={logIn}>
                <Form.Control type="email" name="email" placeholder="Email" onChange={e=>handleChange(e)}/>
                <Form.Control type="password" name="password" placeholder="Password" onChange={e=>handleChange(e)}/>
                <Button type='submit' className='login-btn'> Login </Button>
                {error && <span style={errorStyle}> {error} </span>}
            </Form>
            <div className='go-to-signup' onClick={goToSignup}> New ? Sign Up ! </div>
       </Modal>
    )
}

export default LoginModal