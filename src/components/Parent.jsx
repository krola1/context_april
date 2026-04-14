import Child from "./Child";

export default function Parent() {
  return (
    <div style={{ border: "solid white" }}>
      <h3>Parent</h3>
      <Child />
    </div>
  );
}
