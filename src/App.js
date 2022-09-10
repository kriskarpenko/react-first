import "./App.css";
import Nav from "./components/Nav";
import Body from "./Body";
import Footer from "./Footer";
import Timer from "./components/Timer/Timer";
import CountDown from "./components/CountDown/CountDown";
import Clicker from "./components/Clicker/Clicker";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <nav>
          <div id="mobile-nav">
            <a
              className="App-link"
              href="https://en.wikipedia.org/wiki/Vincent_van_Gogh"
            >
              VIncent Van Gogh
            </a>
          </div>
        </nav>
        <h2>Van Gogh's paintings</h2>
      </header> */}
      <Nav />
      <Body className="App-Body"></Body>
      <Timer />
      <CountDown />
      <Clicker />
      <Footer text="Kristina" />
      {/* {Footer({ text: "Anton", second: 123, ...props })} */}
    </div>
  );
}

export default App;
