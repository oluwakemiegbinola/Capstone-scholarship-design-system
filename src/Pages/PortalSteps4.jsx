import Navbar from "./Components/Navbar";
import Background from "./Components/Background";
import Steps2 from "./Components/Steps2";
import Sop from "./Components/Sop";

import { useState, useEffect } from "react";

let PortalSteps4 = () => {
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
            <div className="flex flex-col space-y-2 px-4"> {/* Tighter spacing */}
                <Background />
                <Steps2 />
                <Sop/>
              
            </div>
        </div>
    );
};

export default PortalSteps4;