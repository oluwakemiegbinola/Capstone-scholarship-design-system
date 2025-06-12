import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import PortalSteps4 from "./Pages/PortalStep4";
// import ScholarshipSearch from "./Pages/ScholarshipSearch";
// import ScholarshipSecondPortal from "./Pages/ScholarshipSecondportal";
// import Scholarshiportal from "./Pages/Scholarshiportal";
// import Applicationportalthree from "./Pages/Applicationportalthree";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Auth Routes */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/portalStep4" element={<PortalSteps4 />} />

        {/* Scholarship Pages */}
        {/* <Route path="/scholarship-search" element={<ScholarshipSearch />} />
        <Route path="/scholarship-secondportal" element={<ScholarshipSecondPortal />} />
        <Route path="/scholarshi-portal" element={<Scholarshiportal />} />
        <Route path="/application-portalthree" element={<Applicationportalthree />} /> */}

        {/* Fallback */}
        {/* <Route path="*" element={<Navigate to="/signup" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
