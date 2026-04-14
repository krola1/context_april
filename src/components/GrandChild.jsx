import { useMessage } from "../context/MessageContext";

export default function GrandChild() {
  const { message } = useMessage();
  return (
    <div style={{ border: "solid white" }}>
      <h3>GrandChild</h3>
      <h3>{message}</h3>
    </div>
  );
}
