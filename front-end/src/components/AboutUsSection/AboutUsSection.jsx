import './AboutUsSection.css';
import { useState, useEffect } from 'react';
import { verticalLogo } from '../../assets/images/logos';
import { bioData } from '../../mocks/data';
import { DEPARTMENT_TITLE } from '../../constants.js';

const bioItem = bioData.bio;

export const AboutUsSection = ({ myRef }) => {

    // eslint-disable-next-line no-unused-vars
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.querySelector('.aboutus-section');
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
        <div className={'aboutus-section'} ref={myRef}>
                <div className="about-us-title">{DEPARTMENT_TITLE}</div>
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