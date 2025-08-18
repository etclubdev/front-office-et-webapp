import './AboutUsSection.css';
import { useRef } from 'react';
import { verticalLogo } from '../../assets/images/logos';
import { bioData } from '../../mocks/data';
import { DEPARTMENT_TITLE } from '../../constants.js';
import { Heading } from '../Typography/Typography.jsx';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver.js';

const bioItem = bioData.bio;

export const AboutUsSection = () => {

    const ref = useRef(null);
    useIntersectionObserver(ref, null, "visible", { threshold: 0.15 });

    return (
        <div className='aboutus-section' ref={ref}>
            <Heading level={1} className="about-us-title">{DEPARTMENT_TITLE}</Heading>
            <div className="bio">
                <div className="bio-logo">
                    <img src={verticalLogo} alt="ET Club" />
                </div>
                <div id='detail-item-1' className="bio-detail">
                    <img className='detail-img' src={require(`../../mocks${bioItem[0].image}`)} alt="ET Club" />
                    <p className='detail-desc'>{bioItem[0].content}</p>
                </div>
                <div id='detail-item-2' className="bio-detail">
                    <p className='detail-desc'>{bioItem[1].content}</p>
                    <img className='detail-img' src={require(`../../mocks${bioItem[1].image}`)} alt="ET Club" />
                </div>
            </div>
        </div >
    )
}