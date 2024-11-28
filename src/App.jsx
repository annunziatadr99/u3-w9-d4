import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import scifi from "./books/scifi.json";
function App() {
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

      <BookList books={scifi} />

      <MyFooter />
    </div>
  );
}

export default App;
