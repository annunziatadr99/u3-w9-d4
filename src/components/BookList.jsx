import { Container, Row, Col, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";
class BookList extends Component {
  state = { searchFilter: "" };
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={8}>
            <FormControl
              type="text"
              value={this.state.searchFilter}
              onChange={(e) => this.setState({ searchFilter: e.target.value })}
              placeholder="Search"
            />
          </Col>
        </Row>
        <Row xs={1} sm={1} md={2} lg={3}>
          {this.props.books
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.searchFilter.toLowerCase())
            )
            .map((book) => (
              <SingleBook
                book={book}
                key={book.asin}
                onBookClick={() => this.props.onBookClick(book.asin)}
              />
            ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
