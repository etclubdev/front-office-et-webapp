import { verticalLogo } from '../../assets/images/logos';
import './AboutUsSection.css';
import { useState, useEffect } from 'react';
import { bioData } from '../../mocks/data';

const bioItem = bioData.bio;

export const AboutUsSection = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.querySelector('.bio');
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`AboutUsSection ${isVisible ? 'visible' : ''}`}>
            <div className="bio">
                <div className="bio--logo">
                    <img src={verticalLogo} alt="ET Club" />
                    <div className='division-bar'></div>
                    <div className='bio--name'>Câu lạc bộ<br />Công nghệ Kinh Tế</div>
                </div>

                <div id='detail-item-1' className="bio-detail">
                    <p className='detail-desc'>{bioItem[0].content}</p>
                    <img className='detail-img' src={require(`../../mocks${bioItem[0].image}`)} alt="ET Club" />
                </div>

                <div id='detail-item-2' className="bio-detail">
                    <img className='detail-img' src={require(`../../mocks${bioItem[1].image}`)} alt="ET Club" />
                    <p className='detail-desc'>{bioItem[1].content}</p>
                </div>
            </div>
        </div>
    )
}
