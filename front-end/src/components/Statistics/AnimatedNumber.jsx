import { useState, useEffect } from "react";

function AnimatedNumber({id, value, duration}) {
    const [displayedValue, setDisplayedValue] = useState(0);

    useEffect( () => {
        let start = 0;
        const end = value;
        const increment = Math.ceil(end / (duration / 100));   
        const timer = setInterval(() => {
            start += increment;  
            if (start >= end) {  
                setDisplayedValue(end);  
                clearInterval(timer);  
            } else {  
                setDisplayedValue(start);  
            }  
        }, 100);  
        }, [value, duration]);

    switch (id) {
        case "time":
            return (
                <div className="animated-number">{displayedValue} năm</div>
            );
        case "reach":
            return (
                <div className="animated-number">{displayedValue}K+</div>
            )
        default:
            return (
                <div className="animated-number">{displayedValue}+</div>
            )

    }
}

export default AnimatedNumber;