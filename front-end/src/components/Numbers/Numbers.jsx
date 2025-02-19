import React from 'react';
import './Numbers.css';

export const Numbers = ({ numbersInfo }) => {
  return (
    <div className="numbers-section">
        <p className="title">{numbersInfo.title}</p>
        <div className="numbers">
        {
            numbersInfo.numbers.map(item => (
                <div className="number-card">
                    <p className="number">{item.number}</p>
                    <p className="name">{item.name}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}
