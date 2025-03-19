import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Events from "./Components/Events";

import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/events" element={<Events/>} />
      </Routes>
    </Router>
  );
}

export default App;
