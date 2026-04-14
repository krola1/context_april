import GrandChild from "./GrandChild";

export default function Child() {
  return (
    <div style={{ border: "solid white" }}>
      <h3>Child</h3>
      <GrandChild />
    </div>
  );
}
