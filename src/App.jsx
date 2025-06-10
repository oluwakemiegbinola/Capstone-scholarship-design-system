import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SignUpPage from "./Pages/SignUpPage";
<<<<<<< HEAD
import LoginPage from "./Pages/LoginPage";
import ScholarshipSearch from "./Pages/ScholarshipSearch";
import ScholarshipSecondPortal from "./Pages/ScholarshipSecondportal";
import Scholarshiportal from "./Pages/Scholarshiportal";
import Applicationportalthree from "./Pages/Applicationportalthree";
=======
import LandingPage from "./Pages/LandingPage";
import ApplicationPage from "./Pages/ApplicationPage";
import Ghanapage from "./Pages/Ghanapage";
import Step3 from "./Pages/Step3";
import StepsCompleted from "./Pages/StepsCompleted"; // Import the new StepsCompleted component
>>>>>>> origin/master

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        {/* Redirect root to /signup */}
=======
        {/* Sign-up page */}
>>>>>>> origin/master
        <Route path="/" element={<Navigate to="/signup" />} />

<<<<<<< HEAD
        {/* Auth Routes */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Scholarship Pages */}
        <Route path="/scholarship-search" element={<ScholarshipSearch />} />
        <Route path="/scholarship-secondportal" element={<ScholarshipSecondPortal />} />
        <Route path="/scholarshi-portal" element={<Scholarshiportal />} />
        <Route path="/application-portalthree" element={<Applicationportalthree />} />

        {/* Fallback */}
=======
        {/* Welcome page */}
        <Route path="/LandingPage" element={<LandingPage />} />

        {/* Application page */}
        <Route path="/application" element={<ApplicationPage />} />

        {/* Step 3 page */}
        <Route path="/step3" element={<Step3 />} />

        {/* Steps Completed page */}
        <Route path="/steps-completed" element={<StepsCompleted />} />

        {/* Ghana page */}
        <Route path="/ghanapage" element={<Ghanapage />} />

        {/* Fallback route for unknown paths */}
>>>>>>> origin/master
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;
