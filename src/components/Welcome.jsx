import { Alert, Container, Row, Col } from "react-bootstrap";

const Section = (props) => (
  <Container fluid>
    <Row className="justify-content-center">
      <Col xs="12">
        <Alert variant="danger">{props.descriptionAlert}</Alert>
      </Col>
    </Row>
  </Container>
);
export default Section;
