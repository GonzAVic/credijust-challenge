import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// SCREENS
import Login from "./components/Login"
import Comparator from "./components/Comparator/Comparator"

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/comparator" element={<Comparator />} />
      </Routes>
    </Router>
  );
}

export default App;
