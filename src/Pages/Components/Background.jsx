const Background = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            {children}
            <img 
                src="/getf.png" 
                className="w-full h-auto object-cover mt-0 mb-0"  // Removed margin
                alt="profile image" 
            />
        </div>
    );
};

export default Background;