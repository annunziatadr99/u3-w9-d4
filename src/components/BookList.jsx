import { Container, Row, Col, FormControl } from "react-bootstrap";
import SigleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    SearchFilter: "", // abbiamo definito il parametro di  uno stato di partenza che in questo caso attende una stringa come valore del parametro
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={8}>
            <FormControl
              type="text"
              value={this.state.SearchFilter} // il VALUE sarà uguale a SearchFilter: e.target.value
              onChange={(e) => this.setState({ SearchFilter: e.target.value })}
              placeholder="Search"
            />
          </Col>
        </Row>
        <Row xs={1} sm={2} md={4} lg={6}>
          {this.props.books
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.SearchFilter.toLowerCase())
            )
            .map((book) => (
              <SigleBook book={book} key={book.asin} />
            ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
