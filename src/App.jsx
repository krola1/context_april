import "./App.css";
import Example from "./components/Example";
import Parent from "./components/Parent";

function App() {
  const message = "hei fra app";
  return (
    <>
      <Example>
        <h3>Message location</h3>
      </Example>
      <Parent />
    </>
  );
}
export default App;
