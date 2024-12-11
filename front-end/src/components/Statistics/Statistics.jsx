import './Statistics.css';
import AnimatedNumber from './AnimatedNumber';
import { useState, useEffect } from 'react';

import { statisticsData } from '../../mocks/data';

const statistics = statisticsData.statistics;

export const Statistics = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.querySelector('.statistics-section');
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight - 100 && position.bottom >= 0) {
            element.style.animation = "zoomIn 1s ease-in-out";
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (!isVisible)
        ? <div className="statistics-section"></div>
        : <div className="statistics-section statistics-section--visible">
            <h1 id="statistics-item-title" className="statistics-title">NHỮNG CON SỐ ẤN TƯỢNG</h1>

            <div className="statistics-items">
                {
                    statistics.map((item) => {
                        return (
                            <div className="statistics-item">
                                <img src={require(`../../mocks${item.image}`)} alt={item.title} className="statistics-item-image" />
                                <AnimatedNumber
                                    id="statistics-time"
                                    value={item.value}
                                    duration={item.duration}
                                    className="statistics-item-value"
                                />
                                <div className="statistics-item-desc">{item.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
}

