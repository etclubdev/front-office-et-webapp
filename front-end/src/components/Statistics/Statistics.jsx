/* eslint-disable react-hooks/exhaustive-deps */
import './Statistics.css';
import { useState, useEffect } from 'react';
import AnimatedNumber from './AnimatedNumber';
import { Available } from '../Available';
import { STATISTICS_TITLE } from '../../constants';
import { PageTitle } from '../../components/PageTitle';
import Skeleton from '@mui/material/Skeleton';

export const Statistics = ({ statistics }) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (!statistics || statistics.length === 0) {
            console.log("FAIL TO FETCH Statistics data");
            return;
        }
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
    }, [statistics]);

    if (!statistics || statistics.length === 0) {
        return (
            <div>
                <PageTitle fontSize="3vw">{STATISTICS_TITLE}</PageTitle>

                <div className="skeleton-alt-stts">

                    <Skeleton variant="rectangular" width="30%" height="10vw" />
                    <Skeleton variant="rectangular" width="30%" height="10vw" />
                    <Skeleton variant="rectangular" width="30%" height="10vw" />

                </div>
            </div>
        )
    }

    return (
        <div className="statistics-section">
            <Available when={isVisible} parentClassName={'statistics-section'}>
                <PageTitle fontSize="3vw">{STATISTICS_TITLE}</PageTitle>
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