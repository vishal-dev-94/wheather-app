import "./App.css";
import Home from "./components/Home";
import Temperature from "./components/Temperature/Temperature";
import Weather from "./components/Weather/Weather";
function App() {
  return (
    <div className="app">
      <h1 className="text-success text-center">Weather App</h1>
      <Weather />
      {/* <Home /> */}
    </div>
  );
}

export default App;
