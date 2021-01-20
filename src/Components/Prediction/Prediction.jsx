import {
  Container,
  Card,
  Form,
  Button,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";
import pic from "./Team 12 (1).png";
import './Prediction.css';
import { useLocation } from "react-router-dom";
import MapsModal from "../GoogleMap/mapsModal";

const Prediction = (props) => {
  const location = useLocation();
  // console.log("test=" + location.state.data);

  return (
    <div className='my-container'>
      <div className='prediction-container'>
        <Card className ='image-result'>
          <img src="https://source.unsplash.com/random/300x300" alt=""/>
        </Card>
        <Card className='text-result'>
          <h1>test</h1>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </Card>
      </div>
      <MapsModal />

    </div>
    // <Container>
    //   <Row>
    //     <Col>
    //       <Card>
    //         <Card.Img variant="top" src={pic} className="mt-5"></Card.Img>
    //       </Card>
    //     </Col>
    //     <Col>
    //       <Card className="mt-5">
    //         <h1>test</h1>
    //       </Card>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col md="auto">
          // <MapsModal />
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default Prediction;
