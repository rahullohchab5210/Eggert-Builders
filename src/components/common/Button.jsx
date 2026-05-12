import React from 'react'

function Button({ text, variant = "primary", className = "", onClick }) {

    const variants = {
        primary: "border border-white text-white hover:bg-white hover:text-black py-3.25 px-5.5",

        secondary: "bg-white text-dark-primary border border-white hover:bg-transparent hover:text-white  py-3.25 px-5.5",

        dark: "border border-dark-primary text-dark-primary hover:bg-dark-primary hover:text-white py-3.25 px-5.5 w-full",

        text: "text-white underline underline-offset-[25%] decoration-solid hover:no-underline",
        
    }

    return (
        <button
            onClick={onClick}
            className={`font-jost font-medium text-xs leading-150 tracking-20 cursor-pointer transition-all duration-300 uppercase ${variants[variant]} ${className}`}>
            {text}
        </button>
    )
}

export default Button