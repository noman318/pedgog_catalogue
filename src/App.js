import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Theme from "./components/Theme/Theme";
import NavbarIndex from "./components/NavbarIndex/NavbarIndex";

function App() {
  return (
    <Router>
      <div>
        <NavbarIndex />
        {/* <Navigate to="/home" match={{ path: "/", exact: true }} /> */}
        <Routes>
          {/* <Route element={<Navigate to="/home" replace />} /> */}
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/theme" element={<Theme />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
