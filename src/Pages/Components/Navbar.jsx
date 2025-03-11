let Navbar = (props) => {


    return (
        <div className="p-4">
            
            <div className="flex justify-between items-center bg-[">
                <div className="flex gap-2 items-center">
                <button onClick={props.toggle} className="rounded-md cursor-pointer min-[700px]:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></button>
                <img src="images/capstone logo.png" className="max-[700px]:scale-80" alt="logo" />
                </div>

                <div className="flex items-center max-[700px]:hidden bg-[#EBEDFF] p-2 rounded-md">
                    <img src="images/search.png" />
                    <input type="search" className="p-2 w-90 " placeholder="STEM Undergraduate in Ghana"/>
                </div>

                <div className="flex items-center gap-5">
                    <img src="images/notification.png" className="cursor-pointer" alt="notification" />
                    <img src="images/bookmarkNav.png" className="cursor-pointer" alt="bookmark"/>
                    <img src="images/profile.png" className="max-[700px]:scale-80" alt="profile image" />
                </div>

            </div>
        </div>
    )
}

export default Navbar