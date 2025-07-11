import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";

import ApplicationPage from "./Pages/ApplicationPage";
import Ghanapage from "./Pages/Ghanapage";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import PortalSteps4 from "./Pages/PortalSteps4";
import PortalSteps1 from "./Pages/PortalSteps1";
import PortalSteps5 from "./Pages/PortalStep5";
import ScholarshipSecondPortal from "./Pages/ScholarshipSecondPortal";
import SignUpPage from "./Pages/SignUpPage";
import Step3 from "./Pages/Step3";
import StepsCompleted from "./Pages/StepsCompleted";
import Admin from "./Pages/Admin";
import Dashboard from "./component5/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/portalStep4" element={<PortalSteps4 />} />
        <Route path="/portalStep5" element={<PortalSteps5 />} />
        <Route path="/portalSteps1" element={<PortalSteps1 />} />
        <Route path="/scholarshiplisting" element={<ScholarshipSecondPortal />} />
        {/* Welcome page */}
        <Route path="/landing" element={<LandingPage />} />
        {/* Step 2 page */}
        <Route path="/application" element={<ApplicationPage />} />
        {/* Step 3 page */}
        <Route path="/step3" element={<Step3 />} />
        {/* Steps Completed page */}
        <Route path="/steps-completed" element={<StepsCompleted />} />
        {/* Ghana page */}
        <Route path="/ghanapage" element={<Ghanapage />} />
        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/application-management" element={<Dashboard />} />
        <Route path="/admin/program-setup" element={<Dashboard />} />
        <Route path="/admin/reviewer-assignment" element={<Dashboard />} />
        <Route path="/admin/communication" element={<Dashboard />} />
        <Route path="/admin/document-centre" element={<Dashboard />} />
        <Route path="/admin/reports" element={<Dashboard />} />
        <Route path="/admin/user-management" element={<Dashboard />} />
        <Route path="/admin/settings" element={<Dashboard />} />
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;