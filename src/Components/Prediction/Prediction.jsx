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
          <div style={{backgroundImage:`url(${"https://source.unsplash.com/random/300x300"})`, minWidth:"299px", minHeight:"250px"}} className="rounded result-image ml-lg-5" alt="Result Image" />
          <Card className='text-result'>
            <h1>Result:</h1>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque, modi inventore quas facere sint veniam vero pariatur soluta eum reiciendis saepe vitae doloribus omnis dolores id error quasi earum.</div>
            <a href={`https://www.google.com/search?q=${"type"}`} className="mt-3" target="_blank">Google Search {"Type"}</a>
          </Card>
        </div>
        <MapsModal />
      </div>
    </div>
  );
};

export default Prediction;
