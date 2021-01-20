import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import MapContainer from "./MapContainer";
import './Map.css';
const MapsModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="maps-result">
      <Button className='login-btn' onClick={handleShow}>
        Find your closest Doctor
      </Button>
      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Find your closest Doctor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="map-wrapper">
              <MapContainer />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};
export default MapsModal;
