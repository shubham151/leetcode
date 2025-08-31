import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryView from "./pages/CategoryView";
import AlgorithmPage from "./pages/AlgorithmPage";
import "./index.css";
import "./slide.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryView />} />
          <Route
            path="/category/:categoryId/:algorithmId"
            element={<AlgorithmPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
