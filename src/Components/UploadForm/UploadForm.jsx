import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import { Container, Form, Button, Dropdown, Row } from 'react-bootstrap'
import { Spinner } from 'reactstrap';
import { useHistory } from "react-router-dom";
import './UploadForm.css'
import { Redirect } from 'react-router'
import { itemUploaded, formImageIssue, displayFormDoctorImage,redirecting } from '../../Tools/WebsiteResponses';
import ModalDoctorDisplay from './ModalDoctorDisplay.png';
import ImageCrop from '../ImageCrop/ImageCrop';

import url from '../../Tools/URLs';


const UploadForm = () => {
    const [infos, setInfos] = useState(null)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [pic, setPic] = useState({ selectedFile: null })
    const [previewPic, setPreviewPic] = useState("")
    const [redirect, setRedirect] = useState(false) // in case of success
    const [loading, setLoading] = useState(false);
    const [croppedImage, setCroppedImage] = useState(null);
    const [sendEmail, setSendEmail] = useState(false);

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
        fontSize: "35px",
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

    if (redirect) {
        return (
            <Redirect to={url} />
        )
    }

    checkBoxSwitch = () => {
        if (sendEmail) {
            setSendEmail(false)
        } else if (!sendEmail) {
            setSendEmail(true)
        }
    }

    return (
        <div style={{marginTop:"-3%"}} className='my-container mb-3'>
            <Form action="" name="image" className="upload-form" onSubmit={e => uploadForm(e)} method="post" enctype="multipart/form-data">
                <div>
                    <h5 className="mt-5">1. Keep the spot in the absolute middle of the picture.</h5>
                    <br />
                    <h5>2. Make sure the quality of the picture is good enough.</h5>
                    <br />
                    <h5>3. Do not take a picture in a dark environment.</h5>
                </div>
                <input type="file" name="image" ref={ref} id="hidden" onChange={(e) => imageUploader(e)} />
                <div className="image-upload" onClick={() => ref.current.click()}><FontAwesomeIcon style={imageUploadStyle} icon={faCamera} /></div>
                {previewPic &&
                    <div className="image-preview">
                        <ImageCrop
                            src={previewPic}
                            setImage={setCroppedImage}
                        />
                    </div>}
                <Form.Control className="upload-input" name="name" placeholder="Name" onChange={e => handleChange(e)} />
                <Form.Control className="upload-input" type="number" name="age" placeholder="Age" onChange={e => handleChange(e)} />
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <Dropdown.Toggle caret>{(infos && infos.category) || 'Gender'}</Dropdown.Toggle>
                    <Dropdown.Menu align='right'>
                        <Dropdown.Item onClick={(e) => handleSelect(e)} name='Male'> Male </Dropdown.Item>
                        <Dropdown.Item onClick={(e) => handleSelect(e)} name='Female'> Female </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="mt-4">
                <label for='checkbox' className="mr-3">Send the results to my email.</label>
                <input style={{cursor:"pointer"}} type='checkbox' name="sendemail" onClick={checkBoxSwitch} />
                </div>
                {!loading ? <Button type="submit"> Submit for results </Button> : <div className="mt-1"><Spinner className="mt-4 mb-3" color="secondary" /></div>
                }
            </Form>
        </div>
    )
}

export default UploadForm