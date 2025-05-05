import './Statistics.css';
import { useState, useEffect } from 'react';
import AnimatedNumber from './AnimatedNumber';
import { Available } from '../Available';
import { STATISTICS_TITLE } from '../../constants';
import { PageTitle } from '../../components/PageTitle';

export const Statistics = ({ statistics }) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.querySelector('.statistics-section');
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight - 100 && position.bottom >= 0) {
            setIsVisible(true);
            element.classList.add('visible');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="statistics-section">
            <div className="division-bar"></div>
            <Available when={isVisible} parentClassName={'statistics-section'}>
                <PageTitle>{STATISTICS_TITLE}</PageTitle>
                <div className="statistics-section-items">
                    {statistics.map((item) => (
                        <div key={item.achievement_id} className="statistics-section-item">
                            <AnimatedNumber
                                id={item.achievement_name === "Năm hoạt động" ? "time" : item.achievement_name === "Lượt tiếp cận" ? "reach" : ""}
                                value={parseInt(item.highlight_number)}
                                className="statistics-section-item-value"
                            />
                            <div className="blurry-ellipse"></div>
                            <div className="statistics-section-item-desc">{item.achievement_name}</div>
                        </div>
                    ))}
                </div>
            </Available>
        </div>
    );
};