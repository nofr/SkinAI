import {
  Container,
  Card,
  Form,
  Button,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";
import './Prediction.css';
import { useLocation } from "react-router-dom";
import MapsModal from "../GoogleMap/mapsModal";

const Prediction = (props) => {
  const location = useLocation();

  return (
    <div className='my-container'>
      <div className="result-container">
        <div className='prediction-container mb-5'>
          <img src="https://source.unsplash.com/random/300x300" className="rounded img-fluid" alt="Result Image" />
          <Card className='text-result'>
            <h1>Result:</h1>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque, modi inventore quas facere sint veniam vero pariatur soluta eum reiciendis saepe vitae doloribus omnis dolores id error quasi earum.</div>
          </Card>
        </div>
        <MapsModal />
      </div>
    </div>
  );
};

export default Prediction;
