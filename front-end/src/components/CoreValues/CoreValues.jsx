import React from 'react';
import './CoreValues.css';

export const CoreValues = ({ coreValues }) => {
  return (
    <div className="core-values-section">
        <p className="title">{coreValues.title}</p>
        <div className="value-container">
            {
                coreValues.values.map(item => (
                    <div key={item.id} className="value">
                        <img src={require(`../../mocks` + item.image)} alt={item.id} className="value-image" />
                        <p className="value-text">{item.value}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
