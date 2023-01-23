import "./App.css";
import Dotgraph from "./dotgraph.jsx";
function App() {
  const data = [
    { x: 3, y: 6, color: "#fefefe" },
    { x: 4, y: 9, color: "#32f432" },
    { x: 5, y: 5, color: "#fe345c" },
    { x: 6, y: 14, color: "#5697cd" },
    { x: 7, y: 16, color: "#556699" },
    { x: 8, y: 26, color: "#995566" },
    { x: 9, y: 16, color: "#afaf32" },
  ];
  return (
    <div className="App">
      <Dotgraph props={data} />
    </div>
  );
}

export default App;
