import React from 'react';
import { useEffect, useState } from 'react';
import './DynamicBlur.css';

import { createBlur } from '../../utils/createBlurUtil';

export const DynamicBlur = ({parentClassName}) => {
    const [circles, setCircles] = useState([]);

    useEffect(() => {
        if (!parentClassName) return;

        const parentElement = document.querySelector(`.${parentClassName}`);
        if (!parentElement) return;

        parentElement.style.overflow = "hidden";
        parentElement.style.position = "relative";
        parentElement.style.zIndex = "100";

        setCircles(createBlur(parentClassName));
    }, [parentClassName]);

    return (
        <div className="dynamic-blur-container">
            {circles.map((circle, index) => (
                <div
                    key={index}
                    className="dynamic-blur-circle"
                    style={{
                        width: circle.size,
                        height: circle.size,
                        top: circle.top,
                        left: circle.left,
                        opacity: circle.opacity,
                        background: circle.background,
                        filter: `blur(${circle.blur}px)`,
                        zIndex:-1,
                    }}
                />
            ))}
        </div>
    )
}
