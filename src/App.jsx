import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import ScholarshipSearch from "./Pages/ScholarshipSearch";
import ScholarshipSecondPortal from "./Pages/ScholarshipSecondportal";
import Scholarshiportal from "./Pages/Scholarshiportal";
import Steps2Portal from "./Pages/Steps2Portal";
import Applicationportalthree from "./Pages/Applicationportalthree";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Auth Routes */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Scholarship Pages */}
        <Route path="/scholarship-search" element={<ScholarshipSearch />} />
        <Route path="/scholarship-secondportal" element={<ScholarshipSecondPortal />} />
        <Route path="/scholarshi-portal" element={<Scholarshiportal />} />
        <Route path="/Steps2Portal" element={<Steps2Portal />} />
        <Route path="/application-portalthree" element={<Applicationportalthree />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;
