import Navbar from "./Components/Navbar";
import Background from "./Components/Background";
<<<<<<< HEAD:src/Pages/PortalSteps3.jsx
import Steps2 from "./Components/Steps2";
import AcademicInfo2 from "./Components/AcademicInfo2";
=======
import Steps from "./Components/Steps";
import Academicinfo from "./Components/AcademicInfo";
>>>>>>> branch-Oluwakemi:src/Pages/Scholarshiportal.jsx
import UploadList from "./Components/UploadList";
import { useState, useEffect } from "react";

let PortalSteps3 = () => {
    let [isOpen, setIsOpen] = useState(true);

    let toggle = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div className="min-h-screen bg-white text-gray-400">
            <Navbar />
            <div className="flex flex-col space-y-2 px-4">
                <Background />
<<<<<<< HEAD:src/Pages/PortalSteps3.jsx
                <Steps2 />
                <AcademicInfo2/>
                <UploadList />
=======
                <Steps />
                <Academicinfo />    {/* ⬆️ moved here */}
                <UploadList />      {/* ⬇️ now this comes last */}
>>>>>>> branch-Oluwakemi:src/Pages/Scholarshiportal.jsx
            </div>
        </div>
    );
};

<<<<<<< HEAD:src/Pages/PortalSteps3.jsx
export default PortalSteps3;
=======
export default Scholarshiportal;
>>>>>>> branch-Oluwakemi:src/Pages/Scholarshiportal.jsx
