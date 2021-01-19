import { faCamera} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import {Container,Form, Button, Dropdown} from 'react-bootstrap'
import './UploadForm.css'
import {Redirect} from 'react-router'
import {BASE_URL} from '../../App'

const UploadForm = () => {
    const [infos, setInfos] = useState(null)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [pic, setPic] = useState({selectedFile: null})
    const [previewPic, setPreviewPic] = useState("")
    const [redirect, setRedirect] = useState(false) // in case of success

    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    const ref = useRef(null)

    const handleChange = (e) => {
        setInfos({
            ...infos,
            [e.target.name] : e.target.value
        })
    }
    
    const imageUploadStyle = {
        color: "#434343", 
        fontSize: "35px",
    }

    const handleSelect = (e) => {
        setInfos({...infos, category: e.target.name})
    }

    const uploadImage = (e) => {
        e.preventDefault()
        const data = new FormData()
        for(let key in infos) {
            data.append(key, infos[key])
        }
        if(pic.selectedFile) {
            data.append('image', pic.selectedFile)
        }
        axios.post(`${BASE_URL}/upload-image`, data)
            .then(res => {
                if(res.status === 200) {
                    setRedirect(true)
                }
            }) // if success so set success & redirect to homepage
            .catch(err => {
                console.log(err)
                // fetch error message from server
                // const error = err.response.data 
                // const errorMessages = error.message || error.category || error.name || error.condition || error.description || error.price 
                // console.log(errorMessages)
            })
    }

    useEffect(() => {

    }, [])

    if(redirect) {
        return (
            <Redirect to={BASE_URL}/>
        )
    }
    return (
        <Container>
        <Form action="" className="upload-form" onSubmit={e=> uploadImage(e)} method="post" enctype="multipart/form-data">
            <input type="file" ref={ref} id="hidden" onChange={(e) => {     
                const file = e.target.files[0]
                const reader = new FileReader()
                reader.onload = (e) => {
                    setPreviewPic(e.target.result)
                }
                reader.readAsDataURL(file)
                setPic({selectedFile :e.target.files[0]})
                } }/>
            <div className="image-upload" onClick={() => ref.current.click()}><FontAwesomeIcon style={imageUploadStyle}  icon={faCamera}/></div>
            {previewPic && <div className="image-preview"><img src={previewPic} alt="loaded pic" /></div>}
            <Form.Control className="upload-input" name="name" placeholder="Name" onChange={e => handleChange(e)}/>
            <Form.Control className="upload-input" type="number" name="age" placeholder="Age" onChange={e => handleChange(e)}/>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <Dropdown.Toggle caret>{(infos && infos.category) || 'Gender'}</Dropdown.Toggle>
                <Dropdown.Menu align='right'>
                        <Dropdown.Item onClick={(e) => handleSelect(e)} name='Male'> Male </Dropdown.Item>
                        <Dropdown.Item onClick={(e) => handleSelect(e)} name='Female'> Female </Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
            <Button type="submit"> Add an item </Button>
        </Form>
    </Container>
    )
}

export default UploadForm