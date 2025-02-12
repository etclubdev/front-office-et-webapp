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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0vw",
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1 } }
    ]
};

export const ETNewsSlider = ({ newsList, categoryid }) => {
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
                <p className="category-title">{newsList.title}</p>
                <div className="category-division-bar"></div>
            </div>

            <CSSTransition
                in={isSliderVisible} 
                timeout={300} 
                classNames="slider"
                unmountOnExit 
            >
                <Slider {...settings}>
                    {newsList.news.map((item, index) => (
                        <VerticalNews key={'vertical-news-' + index} news={item} />
                    ))}
                </Slider>
            </CSSTransition>
        </div>
    );
};
