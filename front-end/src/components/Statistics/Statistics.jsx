/* eslint-disable react-hooks/exhaustive-deps */
import './Statistics.css';
import { useRef, useState } from 'react';
import AnimatedNumber from './AnimatedNumber';
import { STATISTICS_TITLE, STATISTICS_IMAGE } from '../../constants';
import { Heading } from '../Typography/Typography';
import Skeleton from '@mui/material/Skeleton';
import { statisticsBackground } from '../../assets/images/et';
import { statisticsVector1, statisticsVector2 } from '../../assets/images/vectors';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

export const Statistics = ({ statistics }) => {
    const ref = useRef(null);
    useIntersectionObserver(ref, null, "visible", { threshold: 0.15 });

    if (!statistics || statistics.length === 0) {
        return (
            <div>
                <Heading level={1} className="statistics-section-title">
                    {STATISTICS_TITLE}
                </Heading>

                <div className="skeleton-alt-stts">

                    <Skeleton variant="rectangular" width="30%" height="10vw" />
                    <Skeleton variant="rectangular" width="30%" height="10vw" />
                    <Skeleton variant="rectangular" width="30%" height="10vw" />

                </div>
            </div>
        )
    }

    return (
        <div className="statistics-section" ref={ref}>
            <img className="statistics-vector-1" src={statisticsVector2} />
            <div className="statistics-background"></div>
            <img
                className="statistics-background-image"
                src={STATISTICS_IMAGE}
                alt=""
                loading="lazy"
            />

            <Heading level={1} className="statistics-section-title">
                {STATISTICS_TITLE}
            </Heading>

            <div className="statistics-section-items">
                {statistics?.map((item) => (
                    <div key={item.achievement_id} className="statistics-section-item">
                        <AnimatedNumber
                            id={
                                item.achievement_name === "Năm hoạt động"
                                    ? "time"
                                    : item.achievement_name === "Lượt tiếp cận"
                                        ? "reach"
                                        : ""
                            }
                            value={parseInt(item.highlight_number)}
                            className="statistics-section-item-value"
                        />

                        <Heading level={3} className="statistics-section-item-desc">
                            {item.achievement_name}
                        </Heading>
                    </div>
                ))}
            </div>

            <img className="statistics-vector-2" src={statisticsVector1} />
        </div>
    );
};
