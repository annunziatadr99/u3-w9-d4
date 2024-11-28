import { Component } from "react";
import { Card } from "react-bootstrap";

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
      </Card>
    );
  }
}

export default SigleBook;
