import { Container, Card, Form, Button, Dropdown, Row } from "react-bootstrap";
import pic from "./Team 12 (1).png";

import MapsModal from "../GoogleMap/mapsModal";

const Prediction = () => {
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={pic} />
      </Card>
      <MapsModal />
    </Container>
  );
};

export default Prediction;
