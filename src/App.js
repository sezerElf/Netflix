import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home'
import Series from './pages/Series'
import Movies from './pages/Movies'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          {" "}
          <Route path="/" element={<Home />}></Route>
          <Route path="/series" element={<Series />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
