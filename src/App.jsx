import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import scifi from "./books/scifi.json";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { Component } from "react";
class App extends Component {
  state = { selectedAsin: null };
  handleBookSelected = (asin) => {
    this.setState({ selectedAsin: asin });
  };
  render() {
    return (
      <div className="App">
        <MyNav
          logo="EpiBooks"
          href="https://www.google.it/?hl=it"
          HrefName="Home"
          href2="https://www.youtube.com/"
          HrefName2="About"
          href3="https://www.npmjs.com/"
          HrefName3="Browser"
        />
        <Welcome descriptionAlert="Benvenuti nella nostra Libreria" />
        <Container>
          <Row>
            <Col>
              <BookList books={scifi} onBookClick={this.handleBookSelected} />
            </Col>
            <Col>
              {this.state.selectedAsin && (
                <CommentArea asin={this.state.selectedAsin} />
              )}
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </div>
    );
  }
}
export default App;
