import { Route, Routes } from "react-router-dom";
import "./App.css";
import WeatherApp from "./pages/WeatherApp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
      </Routes>
    </div>
  );
}

export default App;
