import Navbar from "./Components/Navbar";
import Background from "./Components/Background";
import Steps from "./Components/Steps";
import UploadList from "./Components/UploadList";
import { useState, useEffect } from "react";

let Scholarshiportal = () => {
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
                <Steps />
                <UploadList />
            </div>
        </div>
    );
};

export default Scholarshiportal;