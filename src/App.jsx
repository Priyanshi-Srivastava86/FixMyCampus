import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ReportIssue from "./Components/ReportIssue";
import Updates from "./Pages/Updates";
import TrackProblem from "./Pages/TrackProblem";
import Help from "./Pages/Help";
<<<<<<< HEAD
import Home from "./Pages/CSS/Home"; 
import StudentRegister from "./Pages/StudentRegister";

=======
import Home from "./Pages/Home";
>>>>>>> 17a9b49 (Updated FixMyCampus pages and features)

const App = () => {
  return (
    <Router>

    
      <Navbar />
      <Routes>
        
        <Route path="/" element={<StudentRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reportissue" element={<ReportIssue />} />
        <Route path="/help" element={<Help />} />
        <Route path="/trackproblem" element={<TrackProblem />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>

    </Router>
  );
};

export default App;