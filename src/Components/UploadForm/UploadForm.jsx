import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import { Container, Form, Button, Dropdown, Row, Spinner } from 'react-bootstrap'
import './UploadForm.css'
import { Redirect } from 'react-router'
import { itemUploaded, formImageIssue, displayFormDoctorImage } from '../../Tools/WebsiteResponses';
import ModalDoctorDisplay from './ModalDoctorDisplay.png';
import url from '../../Tools/URLs';

const UploadForm = () => {
    const [infos, setInfos] = useState(null)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [pic, setPic] = useState({ selectedFile: null })
    const [previewPic, setPreviewPic] = useState("")
    const [redirect, setRedirect] = useState(false) // in case of success
    const [loading, setLoading] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const ref = useRef(null)

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
        console.log(pic.selectedFile)
        if (pic.selectedFile) {
            data.append('user', localStorage.getItem('sessionID'));
            data.append('image', pic.selectedFile);
        }
        axios.post(`${url}/upload-image`, data)
            .then(res => itemUploaded('Image Uploaded'), setLoading(false))
            .catch(err => { setLoading(false); formImageIssue("There was an issue uploading your image") });
    }

    useEffect(() => {
        displayFormDoctorImage(ModalDoctorDisplay);
    }, [])

    const imageUploader = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = (e) => {
            console.log(e.target.result)
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
    return (
        <Container>
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
                {previewPic && <div className="image-preview"><img src={previewPic} alt="loaded pic" /></div>}
                <Form.Control className="upload-input" name="name" placeholder="Name" onChange={e => handleChange(e)} />
                <Form.Control className="upload-input" type="number" name="age" placeholder="Age" onChange={e => handleChange(e)} />
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <Dropdown.Toggle caret>{(infos && infos.category) || 'Gender'}</Dropdown.Toggle>
                    <Dropdown.Menu align='right'>
                        <Dropdown.Item onClick={(e) => handleSelect(e)} name='Male'> Male </Dropdown.Item>
                        <Dropdown.Item onClick={(e) => handleSelect(e)} name='Female'> Female </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {!loading ? <Button type="submit"> Submit for results </Button> : <div class="spinner-border text-primary mt-4" role="status">
  <span class="sr-only">Loading...</span>
</div>}
            </Form>
        </Container>
    )
}

export default UploadForm