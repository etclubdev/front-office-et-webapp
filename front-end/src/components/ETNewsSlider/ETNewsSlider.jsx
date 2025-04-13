import './ETNewsSlider.css';
import Slider from "react-slick";
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { VerticalNews } from '../VerticalNews';
import { NextArrow } from '../NextArrow';
import { PrevArrow } from '../PrevArrow';

import toogleIcon from '../../mocks/images/etnews/toogleIcon.png';

const settings = {
    dots: false,
    swipe: true, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    variableWidth: false, 
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1,  arrows: false} }
    ]
};

export const ETNewsSlider = ({ newsList, categoryid="id", title }) => {
    const [isSliderVisible, setSliderVisible] = useState(true);
    
    const toggleSlider = () => {
        setSliderVisible(!isSliderVisible);
        const toogleIcon = document.querySelector(`#${categoryid}-icon`);
        if (isSliderVisible){
            toogleIcon.classList.add('active');
        }
        else {
            toogleIcon.classList.remove('active')
        }
    };

    return (
        <div className="et-news-slider">
            <div className="category-title-container">
                <img id= {`${categoryid}-icon`}
                    className="category-title-icon"
                    src={toogleIcon}
                    onClick={toggleSlider}
                    alt="Category Icon"
                />
                <p className="category-title">{title}</p>
                <div className="category-division-bar"></div>
            </div>

            <CSSTransition
                in={isSliderVisible} 
                timeout={300} 
                classNames="slider"
                unmountOnExit 
            >
                <Slider {...settings}>
                    {newsList.map((item, index) => (
                        <VerticalNews key={'vertical-news-' + index} news={item} />
                    ))}
                </Slider>
            </CSSTransition>
        </div>
    );
};
