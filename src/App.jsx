import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import ScholarshipSearch from "./Pages/ScholarshipSearch"; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
           {/* Sign-up page */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Welcome page */}
        <Route path="/ScholarshipSearch" element={<ScholarshipSearch />} />
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Routes>
    </Router>
  );
}

export default App;