import Navbar from "./Components/Navbar"; 
import Steps2 from "./Components/Steps2";
import Application2 from "./Components/Application2";

import Background from "./Components/Background";

import { useState, useEffect } from "react";

let PortalSteps1 = () => {
    let [isOpen, setIsOpen] = useState(true);

    let toggle = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div>
            <Navbar />
            <div className="flex flex-col -mt-1">
                <Background />
                <div className="mt-12">
                    <Steps2 />
                    <Application2/>
                </div>
            </div>
        </div>
    );
};

export default PortalSteps1;

