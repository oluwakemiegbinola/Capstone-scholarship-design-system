import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import ScholarshipSearch from "./Pages/ScholarshipSearch";
import ScholarshipSecondPortal from "./Pages/ScholarshipSecondportal";
import PortalSteps5 from "./Pages/PortalSteps5";
import PortalSteps4 from "./Pages/PortalSteps4";
import PortalSteps3 from "./Pages/PortalSteps3";
import PortalSteps2 from "./Pages/PortalSteps2";
import PortalSteps1 from "./Pages/PortalSteps1";

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
        <Route path="/PortalSteps5" element={<PortalSteps5 />} />
        <Route path="/PortalSteps4" element={<PortalSteps4 />} />
        <Route path="/PortalSteps3" element={<PortalSteps3 />} />
        <Route path="/PortalSteps2" element={<PortalSteps2 />} />
        <Route path="/PortalSteps1" element={<PortalSteps1 />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;
