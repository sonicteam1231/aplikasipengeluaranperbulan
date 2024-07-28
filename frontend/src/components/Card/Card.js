import React from 'react';

const Card = ({ title, amount, color }) => {
    return (
        <div className={`p-4 rounded shadow w-48 ${color}`}>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-lg">Rp. {amount.toLocaleString()}</p>
        </div>
    );
};

export default Card;
