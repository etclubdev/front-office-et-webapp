import './AboutUsSection.css';
import { useState, useEffect } from 'react';
import { Available } from '../Available';
import { verticalLogo } from '../../assets/images/logos';
import { bioData } from '../../mocks/data';
import { DEPARTMENT_TITLE } from '../../constants.js';  

const bioItem = bioData.bio;

export const AboutUsSection = ({ myRef }) => {

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
            <Available when={isVisible}>
                <div className="bio">
                    <div id='detail-item-1' className="bio-detail">
                        <p className='detail-desc'>{bioItem[0].content}</p>
                        <img className='detail-img' src={require(`../../mocks${bioItem[0].image}`)} alt="ET Club" />
                    </div>
                    <div className="bio-logo">
                        <img src={verticalLogo} alt="ET Club" />
                        <p className="">{DEPARTMENT_TITLE}</p>  
                    </div>
                </div>
            </Available>
        </div>
    )
}