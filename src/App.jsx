import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { TabularUI } from "./components/TabularUI/TabularUI";
import { StopWatch } from "./components/StopWatch/StopWatch";
import { FormComponent } from "./components/FormComponent/FormComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome Home</h1>} />
          <Route path="/table" element={<TabularUI />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/form" element={<FormComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
