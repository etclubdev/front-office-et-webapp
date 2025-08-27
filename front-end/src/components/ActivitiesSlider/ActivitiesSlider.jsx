import './ActivitiesSlider.css';

import { Activity } from '../Activity';
import { ActivitiesNextArrow } from '../ActivitiesNextArrow';
import { PrevArrow } from '../PrevArrow';
import { NextArrow } from '../NextArrow';
import Slider from "react-slick";
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Heading } from '../Typography/Typography';
import toogleIcon from '../../mocks/images/activities/toogleIcon.png';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 }},
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 }},
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } }
    ]
};

export const ActivitiesSlider = ({activities, category, categoryId}) => {
    const [isSliderVisible, setSliderVisible] = useState(true);
    
    const isMobile = window.innerWidth <= 768;

    const toggleSlider = () => {
        setSliderVisible(!isSliderVisible);
        const toogleIcon = document.querySelector(`#${categoryId}`);
        if (isSliderVisible){
            toogleIcon.classList.add('active');
        }
        else {
            toogleIcon.classList.remove('active')
        }
    };

    return(
        <div className="activities-slider">
            <div className="activities-title-container" onClick={toggleSlider}>
                <img 
                    id={categoryId}
                    className="activities-title-icon"
                    src={toogleIcon}
                    alt="Activities Icon"
                />
                <Heading level={2} className="activities-slider-title">{category}</Heading>
                <div className="activities-division-bar"></div>
            </div>

            <CSSTransition
                in={isSliderVisible} 
                timeout={300} 
                classNames="slider"
                unmountOnExit 
            >
                {
                    ((isMobile && activities?.length > 1) || (!isMobile && activities?.length > 2)) ? (
                        <Slider {...settings}>
                            {activities?.map((item) => (
                                    <Activity key={item.activity_id} activity={item}/>
                                ))
                            }
                        </Slider>
                    ) : <div className='activities-container'>
                        {
                            activities?.map((item) => (
                                <Activity key={item.activity_id} activity={item}/>
                            ))
                        }
                        </div>
                }
                
            </CSSTransition>
        </div>
    )
}