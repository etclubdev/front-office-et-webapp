import './ActivitiesSlider.css';

import Activity from '../Activity';
import NextArrow from '../NextArrow';

import Slider from "react-slick";
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import toogleIcon from '../../mocks/images/activities/toogleIcon.png';

export const ActivitiesSlider = ({typeId, activities}) => {
    const [isSliderVisible, setSliderVisible] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "17vw",
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 2.5, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2.5, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 2.5, slidesToScroll: 1 } }
        ]
    };

    // const toggleSlider = () => {
    //     setSliderVisible(!isSliderVisible);
    //     // const toogleIcon = document.querySelector(`#${categoryid}-icon`);
    //     if (isSliderVisible){
    //         toogleIcon.classList.add('active');
    //     }
    //     else {
    //         toogleIcon.classList.remove('active')
    //     }
    // };

    return(
        <div className="activities-slider">
            <div className="activities-title-container">
                <img 
                    className="activities-title-icon"
                    src={toogleIcon}
                    // onClick={toggleSlider}
                    alt="Activities Icon"
                />
                <p className="activities-title">{activities[0].type}</p>
                <div className="activities-division-bar"></div>
            </div>

            <CSSTransition
                in={isSliderVisible} 
                timeout={300} 
                classNames="activity-slider"
                unmountOnExit 
            >
                {
                    activities.length > 2 ? (
                        <Slider {...settings}>
                            {activities.map((item, index) => (
                                <Activity activity={item} active={false}/>
                            ))}
                        </Slider>
                    ) : <div style={{marginLeft: "1vw",display: "flex", gap: "4vw"}}>
                        {
                            activities.map((item, index) => (
                                <Activity activity={item} active={false}/>
                            ))
                        }
                        </div>
                }
                
            </CSSTransition>
        </div>
    )
}