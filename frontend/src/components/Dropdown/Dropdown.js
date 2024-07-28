import React from 'react';

const Dropdown = ({ label, options, onChange }) => {
    return (
        <div className="relative mx-2">
            <label className="block text-gray-700 mb-1">{label}</label>
            <select 
                onChange={onChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
