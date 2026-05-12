import React from "react";
const Icons = ({ icon, pathClass, className }) => {
    const iconList = {
        LOCATION: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6673 8.33333C16.6673 12.4942 12.0515 16.8275 10.5015 18.1658C10.3571 18.2744 10.1813 18.3331 10.0007 18.3331C9.81999 18.3331 9.64421 18.2744 9.49982 18.1658C7.94982 16.8275 3.33398 12.4942 3.33398 8.33333C3.33398 6.56522 4.03636 4.86953 5.28661 3.61929C6.53685 2.36904 8.23254 1.66666 10.0007 1.66666C11.7688 1.66666 13.4645 2.36904 14.7147 3.61929C15.9649 4.86953 16.6673 6.56522 16.6673 8.33333Z" stroke="url(#paint0_linear_192_6102)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z" stroke="url(#paint1_linear_192_6102)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_192_6102" x1="3.33398" y1="14.4601" x2="17.1282" y2="13.6791" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EC6112" />
                        <stop offset="1" stop-color="#FF902E" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_192_6102" x1="7.5" y1="9.6714" x2="12.6635" y2="9.30596" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#EC6112" />
                        <stop offset="1" stop-color="#FF902E" />
                    </linearGradient>
                </defs>
            </svg>

        ),
        STAR: (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_300_23)">
                    <path d="M15.0001 22.825L6.18389 27.76L8.15264 17.85L0.733887 10.99L10.7676 9.8L15.0001 0.625L19.2326 9.8L29.2664 10.99L21.8476 17.85L23.8164 27.76L15.0001 22.825Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_300_23">
                        <rect width="30" height="30" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        ),

    };
    const addClassName = (icon) => {
        return React.cloneElement(icon, {
            className: (className || "") + " custom-class",
        });
    };
    const iconsNew = Object.fromEntries(
        Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)]),
    );
    return iconsNew[icon] || null;
};
export default Icons




