import './Statistics.css';
import AnimatedNumber from './AnimatedNumber';
import { useState, useEffect } from 'react';

import { img1, img2, img3, img4, img5 } from '../../assets/numbers';

export const Statistics = () => {

    const [isVisible, setIsVisible] = useState(false);  

    const handleScroll = () => {  
        const element = document.querySelector('.statistics-section');  
        const position = element.getBoundingClientRect();        

        if (position.top < window.innerHeight - 100 && position.bottom >= 0) {  
            element.style.animation = "zoomIn 1s ease-in-out";
            setIsVisible(true);  
        }  
    };      

    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
        };  
    }, []);

    return (!isVisible) 
        ? <div className="statistics-section"></div> 
        : <div className="statistics-section statistics-section--visible">  
        <h1 id="statistics-item-title" className="statistics-section__title">NHỮNG CON SỐ ẤN TƯỢNG</h1>  
        <div className="statistics-section__items">  
            <div className="statistics-section__item">  
                <img src={img1} alt="" className="statistics-section__item-image" />  
                <AnimatedNumber  
                    id="statistics-time"  
                    value={6}  
                    duration={100000}  
                    className="statistics-section__item-value"  
                />  
                <div className="statistics-section__item-desc">Thời gian hoạt động</div>  
            </div>  
            <div className="statistics-section__item">  
                <img src={img2} alt="" className="statistics-section__item-image" />  
                <AnimatedNumber  
                    id="statistics-members"  
                    value={1200}  
                    duration={3000}  
                    className="statistics-section__item-value"  
                />  
                <div className="statistics-section__item-desc">Cựu thành viên</div>  
            </div>  
        </div>  
    
        <div className="statistics-section__items">  
            <div className="statistics-section__item">  
                <img src={img3} alt="" className="statistics-section__item-image" />  
                <AnimatedNumber  
                    id="statistics-partner"  
                    value={100}  
                    duration={3000}  
                    className="statistics-section__item-value"  
                />  
                <div className="statistics-section__item-desc">Số đối tác</div>  
            </div>  
            <div className="statistics-section__item">  
                <img src={img4} alt="" className="statistics-section__item-image" />  
                <AnimatedNumber  
                    id="statistics-performance"  
                    value={50}  
                    duration={3000}  
                    className="statistics-section__item-value"  
                />  
                <div className="statistics-section__item-desc">Số chương trình<br />tổ chức</div>  
            </div>  
            <div className="statistics-section__item">  
                <img src={img5} alt="" className="statistics-section__item-image" />  
                <AnimatedNumber  
                    id="statistics-reach"  
                    value={26}  
                    duration={3000}  
                    className="statistics-section__item-value"  
                />  
                <div className="statistics-section__item-desc">Lượt tiếp cận</div>  
            </div>  
        </div>  
    </div>
}

