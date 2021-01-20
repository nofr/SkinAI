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

import MapsModal from "../GoogleMap/mapsModal";

const Prediction = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={pic} className="mt-5"></Card.Img>
          </Card>
        </Col>
        <Col>
          <Card className="mt-5">
            {" "}
            <h1>test</h1>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="auto">
          {" "}
          <MapsModal />
        </Col>
      </Row>
    </Container>
  );
};

export default Prediction;
