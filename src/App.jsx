import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ReportIssue from "./Components/ReportIssue";
import Updates from "./Pages/Updates";
import TrackProblem from "./Pages/TrackProblem";
import Help from "./Pages/Help";
import Home from "./Pages/CSS/Home";

const App = () => {
  return (
    <Router>

    
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/reportissue" element={<ReportIssue />} />
        <Route path="/help" element={<Help />} />
        <Route path="/trackproblem" element={<TrackProblem />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>

    </Router>
  );
};

export default App;