import Timer from "../components/Timer/Timer";
import CountDown from "../components/CountDown/CountDown";
import Clicker from "../components/Clicker/Clicker";
import { SingleKittyFact, ListKittyFacts } from "../components/KittyFacts/";
import Dogs from "../components/Dogs";

/**
 * Renders  main page
 */
const Main = () => {
  return (
    <div>
      <h1>Main</h1>
      <Timer />
      <CountDown initialValue={3} />
      <Clicker />
      <SingleKittyFact />
      <Dogs />
      <ListKittyFacts defaultPage={1} />
    </div>
  );
};

export default Main;
