import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import LandingPage from "./Pages/LandingPage";
import ApplicationPage from "./Pages/ApplicationPage";
import Ghanapage from "./Pages/Ghanapage";
import Step3 from "./Pages/Step3";
import StepsCompleted from "./Pages/StepsCompleted"; // Import the new StepsCompleted component

function App() {
  return (
    <Router>
      <Routes>
        {/* Sign-up page */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUpPage />} />

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
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;