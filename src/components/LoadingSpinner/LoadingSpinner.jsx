// LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative left-[10rem] md:left-[25rem] xl:left-[43rem]">
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></div>

                <div className="absolute top-2 left-2 w-12 h-12 bg-gray-900 rounded-full"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
