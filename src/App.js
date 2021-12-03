import "./App.css";
import Table from "./component/Table";

const dataSet = [
  { name: "Shreeshail", age: 26 },
  { name: "Sachin", age: 20 },
  { name: "akash", age: 22 },
  { name: "barath", age: 30 },
  { name: "kiran", age: 22 },
];

function App() {
  return (
    <div className="App">
      <Table rows={dataSet} columns={["Name", "Age"]} />
    </div>
  );
}

export default App;
