import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Recensioni</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci un tuo commento al Libro"
            required
          />
          <Form.Label>VOTO</Form.Label>
          <Form.Select aria-label="Default select example" required>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary">Invia Recensione</Button>
      </Form>
    );
  }
}
export default AddComment;
