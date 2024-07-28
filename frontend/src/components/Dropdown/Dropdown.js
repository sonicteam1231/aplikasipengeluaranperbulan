import React from 'react';

const Dropdown = ({ label, options, onChange, defaultValue }) => {
    return (
        <div className="mr-4">
            <label className="block mb-1">{label}</label>
            <select className="p-2 border rounded" onChange={onChange} defaultValue={defaultValue}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
