import './ActivitiesSlider.css';

import { Activity } from '../Activity';
import { ActivitiesNextArrow } from '../ActivitiesNextArrow';

import Slider from "react-slick";
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import toogleIcon from '../../mocks/images/activities/toogleIcon.png';

export const ActivitiesSlider = ({activities, category, categoryId}) => {
    const [isSliderVisible, setSliderVisible] = useState(true);
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "14vw",
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        nextArrow: <ActivitiesNextArrow />,
        prevArrow: <></>,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 2.5, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2.5, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 2.5, slidesToScroll: 1 } }
        ]
    };

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
            <div className="activities-title-container">
                <img 
                    id={categoryId}
                    className="activities-title-icon"
                    src={toogleIcon}
                    onClick={toggleSlider}
                    alt="Activities Icon"
                />
                <p className="activities-slider-title">{category}</p>
                <div className="activities-division-bar"></div>
            </div>

            <CSSTransition
                in={isSliderVisible} 
                timeout={300} 
                classNames="slider"
                unmountOnExit 
            >
                {
                    activities?.length > 2 ? (
                        <Slider {...settings}>
                            {activities?.map((item) => (
                                    <Activity key={item.activity_id} activity={item}/>
                                ))
                            }
                        </Slider>
                    ) : <div style={{display: "flex", gap: "0vw"}}>
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