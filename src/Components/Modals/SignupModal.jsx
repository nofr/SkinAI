import Modal from 'react-modal';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { useContext, useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { Authentication } from '../../Contexts/Authentication'
import { signUpSuccess } from '../../Tools/WebsiteResponses';
import url from '../../Tools/URLs';

const SignupModal = (props) => {
    const [input, setInput] = useState(null)  // Get input
    const [error, setError] = useState(null) // // Handle error from API

    const {isLogged, setIsLogged} = useContext(Authentication)

    const handleChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
    }
    const signUp = (e) => {
        e.preventDefault()
        axios.post(`${url}/signup`, input)
        .then(res => {
            if (res.status === 200) {
                setIsLogged(true);
                signUpSuccess();
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('sessionID', res.data.user._id)
            }
        })
        .catch(err => {
            const error = err.response.data
            // Define error message based on API
            const errorType = error.message || error.firstName || error.lastName || error.phone 
            if(err.response.status === 409) {
                setError(errorType)
            }
        })
    }

    const errorStyle = {
        color: '#d10000', 
        fontSize: '18px', 
        marginTop: '10px', 
        padding: '7px',
        borderRadius: '9px',
        backgroundColor: 'whitesmoke'
    }

    const goToLogin = () => {
        props.setIsSignupOpen(false)
        props.setIsLoginOpen(true)
    }

    return (
        <Modal
        isOpen={props.isSignupOpen}
        onRequestClose={props.closeSignup}
        style={props.modalStyle}
        contentLabel="Example Modal"
        closeLogin={props.closeSignup}
          >
        <span onClick={goToLogin} className='modal-close-btn'><FontAwesomeIcon icon={faArrowLeft}/></span>
        <h2 style={{textAlign: 'center', color: '#434343'}}>Signup</h2>
        <Form className ='login-form' onSubmit={signUp}>
            <Form.Control type="email" name="email" placeholder="Email" onChange={e=>handleChange(e)}/>
            <Form.Control type="password" name="password" placeholder="Password" onChange={e=>handleChange(e)}/>
            <Form.Control type="password" name="confirmPassword" placeholder="Confirm password" onChange={e=>handleChange(e)}/>
            <Form.Control name="firstName" placeholder="First name" onChange={e=>handleChange(e)}/>
            <Form.Control name="lastName" placeholder="Last name" onChange={e=>handleChange(e)}/>
            <Form.Control name="phone" placeholder="Phone number" onChange={e=>handleChange(e)}/>
            <Button type='submit' className="login-btn"> Signup </Button>
            {error && <span style={errorStyle}> {error} </span>}
        </Form>
        </Modal>
    )
}

export default SignupModal