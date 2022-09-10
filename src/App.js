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
      <Nav />
      <Body className="App-Body"></Body>
      <Timer />
      <CountDown initialValue={3} />
      <Clicker />
      <Footer text="Kristina" />
    </div>
  );
}

export default App;
