import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage"; // Correct the name of your login page
import ScholarshipSearch from "./Pages/ScholarshipSearch"; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Sign-up page */}
        <Route path="/signup" element={<SignUpPage />} />

        {/* Login page */}
        <Route path="/login" element={<LoginPage />} /> {/* Added login page route */}

        {/* Scholarship Search page */}
        <Route path="/scholarship-search" element={<ScholarshipSearch />} /> {/* Adjusted route to lowercase */}

        {/* Catch-all route for any undefined paths */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;
