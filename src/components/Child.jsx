import { useMessage } from "../context/MessageContext";
import GrandChild from "./GrandChild";

export default function Child() {
  const { greeting, message } = useMessage();
  return (
    <div style={{ border: "solid white" }}>
      <h3>Child</h3>
      <p>{greeting}</p>
      <GrandChild />
    </div>
  );
}
