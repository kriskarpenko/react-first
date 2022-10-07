import "./App.css";
import Nav from "./components/Nav";
import Body from "./Body";
import Footer from "./Footer";
import Timer from "./components/Timer/Timer";
import CountDown from "./components/CountDown/CountDown";
import Clicker from "./components/Clicker/Clicker";
import ColoredButton from "./components/ColoredButton/ColoredButton";
import React from "react";
import { ListKittyFacts, SingleKittyFact } from "./components/KittyFacts";
import Dogs from "./components/Dogs";

function App() {
  const propsButtonToRender = {
    // disabled: true,
    initialColor: "yellow",
    children: <div>text in div</div>,
  };
  return (
    <div className="App">
      <Nav />
      <Body className="App-Body"></Body>
      <Timer />
      <CountDown initialValue={3} />
      <Clicker />
      <ColoredButton {...propsButtonToRender}></ColoredButton>
      {/* {ColoredButton(propsButtonToRender)} */}

      <SingleKittyFact />
      <Dogs />
      <ListKittyFacts />
      <Footer text="Kristina" />
    </div>
  );
}

export default App;
