import React from 'react'

function Input({ type, name, placeholder, value, onChange }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="placeholder:font-montserrat placeholder:font-normal placeholder:text-sm placeholder:leading-150 placeholder:tracking-10 placeholder:text-gray-dark focus:outline-none"
        />
    )
}

export default Input