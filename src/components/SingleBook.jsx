import { Component } from "react";
import { Card, Badge, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SigleBook extends Component {
  state = {
    selected: false, // qui stiamo inserendo uno stao di partenza che in questo caso è un boolean false
  };
  render() {
    return (
      <Card
        className={
          this.state.selected ? "border-2 border-success" : "border-danger" // qui stiamo creando due stati che se è true è verde e se false rosso
        }
      >
        <Card.Img
          variant="top"
          src={this.props.book.img} // il THIS è utilizzanto all'interno della classe in qui viene definita
          onClick={() => this.setState({ selected: !this.state.selected })} //setstate serve a settare uno stato  // ! importate per far si che ci sia un alternanza tra i due stati in questo caso i due colori diversi del bordo
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
        <Card.Text>
          <Badge bg="dark">{this.props.book.price}$</Badge>
        </Card.Text>
        <Button variant="success">{this.props.book.category}</Button>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </Card> //                                   Utilizzando && noi stiamo legando CommentArea solo se la situazione è true cioe se viene clicctata l'immagine ----   asin={this.props.book.asin} aggiungiamo questa riga per ricavarci l'ID di ogni libro che ci servita alla FETCH in COMMENTAREA
    );
  }
}

export default SigleBook;
