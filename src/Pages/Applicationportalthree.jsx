import Navbar from "./Components/Navbar"; 
import Steps from "./Components/Steps";
import Background from "./Components/Background";

import { useState, useEffect } from "react";

let Applicationportalthree = () => {
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
                    <Steps />
                </div>
            </div>
        </div>
    );
};

export default Applicationportalthree;

