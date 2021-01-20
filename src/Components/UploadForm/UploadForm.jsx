import { faArrowLeft, faCamera,faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useRef, useState, useContext } from 'react'
import { Form, Button, Dropdown, Row } from 'react-bootstrap'
import { Spinner } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './UploadForm.css'
import { Redirect } from 'react-router'
import { itemUploaded, formImageIssue, displayFormDoctorImage,redirecting } from '../../Tools/WebsiteResponses';
import ModalDoctorDisplay from './ModalDoctorDisplay.png';
import ImageCrop from '../ImageCrop/ImageCrop';
import { Authentication } from "../../Contexts/Authentication";
import url from '../../Tools/URLs';


const UploadForm = () => {
    const [infos, setInfos] = useState(null)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [pic, setPic] = useState({ selectedFile: null })
    const [previewPic, setPreviewPic] = useState("")
    const [redirect, setRedirect] = useState(false) // in case of success
    const [loading, setLoading] = useState(false);
    const [croppedImage, setCroppedImage] = useState('bold');
    const [sendEmail, setSendEmail] = useState(false)
    const [nextForm, goToNextForm] = useState(false)
    const {isLogged, setIsLogged} = useContext(Authentication) 

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const ref = useRef(null)
    const history = useHistory();
    const handleChange = (e) => {
        setInfos({
            ...infos,
            [e.target.name]: e.target.value
        })
    }

    const imageUploadStyle = {
        color: "#434343",
        fontSize: `${previewPic ? `15px` : `35px`}`,
    }

    const handleSelect = (e) => {
        setInfos({ ...infos, category: e.target.name })
    }

    const uploadForm = (e) => {
        setLoading(true);
        e.preventDefault()
        const data = new FormData()
        for (let key in infos) {
            data.append(key, infos[key])
        }
        if (pic.selectedFile) {
            data.append('user', localStorage.getItem('sessionID'));
            let img = pic.selectedFile;
            if (croppedImage) {
                img = croppedImage;
            }
            data.append('image', img);
        }
        redirecting();
        axios.post(`${url}/upload-image`, data)
            .then((res) => {
                itemUploaded('Image Uploaded'); 
                setLoading(false)
                history.push({
                    pathname: '/Prediction',
                    state: {data: res.data}
                })
            })
            .catch(err => { formImageIssue("There was an issue uploading your image"); setLoading(false)});
    }

    useEffect(() => {
        displayFormDoctorImage(ModalDoctorDisplay);
    }, [])

    const imageUploader = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = (e) => {
            setPreviewPic(e.target.result)
        }
        reader.readAsDataURL(file)
        setPic({ selectedFile: e.target.files[0] })
    }

    const goToPreviousForm = (image) => {
        setCroppedImage(image)
        goToNextForm(false)
    }

    if (redirect) {
        return (
            <Redirect to={url} />
        )
    }

    return (
        <div className='my-container'>
            <div className='upload-container'>
            <div className='instructions'>
                        <h5 >1. Keep the spot in the absolute middle of the picture.</h5>
                        <br />
                        <h5>2. Make sure the quality of the picture is good enough.</h5>
                        <br />
                        <h5>3. Do not take a picture in a dark environment.</h5>
                    </div>
               <Form action="" name="image" className="upload-form" onSubmit={e => uploadForm(e)} method="post" enctype="multipart/form-data">
                    {!nextForm && 
                    <>
                    <input type="file" name="image" ref={ref} id="hidden" onChange={(e) => imageUploader(e)} />
                    <div className="image-upload" style={{width: `${previewPic ? `45px` : `90px`}`,height: `${previewPic ? `45px` : `90px`}`}}onClick={() => ref.current.click()}><FontAwesomeIcon style={imageUploadStyle} icon={faCamera} /></div>
                   
                       {previewPic && <div className="image-preview">
                            <ImageCrop
                                haveCropped={croppedImage && croppedImage}
                                src={previewPic}
                                setImage={setCroppedImage}
                            />
                        </div>}
                        <Button onClick={() => goToNextForm(true)}> Next </Button>                        
                        </>}
                        {nextForm && 
                        <>
                        <div style={{position: 'relative', alignSelf: 'flex-start', marginLeft: '20px', cursor: 'pointer'}} onClick={() => goToPreviousForm()}> <FontAwesomeIcon icon={faArrowLeft} size="2x"/> </div>
                    <Form.Control className="upload-input" type="number" name="age" min="0" max="120" placeholder="Age" onChange={e => handleChange(e)} value={(infos && infos.age) && infos.age}/>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <Dropdown.Toggle caret>{(infos && infos.category) || 'Gender'}</Dropdown.Toggle>
                        <Dropdown.Menu align='right'>
                            <Dropdown.Item onClick={(e) => handleSelect(e)} name='Male'> Male </Dropdown.Item>
                            <Dropdown.Item onClick={(e) => handleSelect(e)} name='Female'> Female </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="send-email">
                        <h5> Recieve the result by e-mail ?</h5>
                        <div className="cstm-checkbox">
                            {!sendEmail && <FontAwesomeIcon icon={faToggleOff} size='2x' onClick={() => {
                                setInfos({...infos, sendemail : true})
                                setSendEmail(true)
                                }} />}
                            {sendEmail && <FontAwesomeIcon icon={faToggleOn} size='2x' onClick={() => {
                                setInfos({...infos, sendemail : false})
                                setSendEmail(false)
                                }} />}
                        </div>
                        {(sendEmail && !isLogged) && <Form.Control className="email-input" required={sendEmail} type="e mail" name="email" placeholder="Enter your e-mail" onChange={e => handleChange(e)} value={(infos && infos.email) && infos.email}/>}
                    </div>
      
                        {!loading ? <Button type="submit"> Submit </Button> : <div className="mt-1"><Spinner className="mt-4 mb-3" color="secondary" /></div>}
                        </>}

                        </Form>

                   

            </div>
        </div>
    )
}

export default UploadForm