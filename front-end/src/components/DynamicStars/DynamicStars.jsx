import React, { useEffect, useState } from 'react';
import { createStars } from '../../utils/createStarUtil';

import './DynamicStars.css';

export const DynamicStars = ({ parentClassName }) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        setStars(createStars(parentClassName));
    }, []);

    return (
        <div className="dynamic-stars-container">
            {stars.map((star, index) => (
                <div
                    key={index}
                    className="star"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        top: star.top,
                        left: star.left,
                        animationDuration: star.animationDuration,
                    }}
                />
            ))}
        </div>
    );
};
