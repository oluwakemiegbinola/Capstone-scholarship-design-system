import { Link } from "react-router-dom";
import logo from "../../assets/image/nice.png";

let Navbar = (props) => {
    return (
        <div className="">
            <div className="flex max-[800px]:flex-col max-[800px]:space-y-4 justify-between items-center ml-8">
                
                {/* Logo */}
                <div>
                    <Link to={`/signup`}>
                        <img 
                            src={logo} 
                            className="w-40 h-30 max-[800px]:w-12 max-[800px]:h-12" 
                            alt="logo" 
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-10 min-[800px]:text-xl">
                    <p>Home</p>
                    <p>Find Scholarships</p>
                    <p>How It Works</p>
                    <p className="flex items-center">
                        Categories 
                        <img 
                            src="/down-arrow.png" 
                            className='col-start-4 ml-1' 
                            alt="down arrow" 
                        />
                    </p>
                </div>

                {/* User Actions */}
                <div className="flex max-[800px]:flex-col items-center min-[800px]:gap-10">
                    <div className="flex items-center gap-5 justify-self-end">
                        <img 
                            src="/notification.png" 
                            className="cursor-pointer" 
                            alt="notification" 
                        />
                        <button 
                            className="bg-[#0000FE] p-2 px-6 rounded-md text-white cursor-pointer max-[700px]:text-xs"
                        >
                            Apply Now
                        </button>
                    </div>
                    <img 
                        src="/profile.png" 
                        className="w-10 h-10 max-[500px]:w-8 max-[500px]:h-8 mt-2" 
                        alt="profile image" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
