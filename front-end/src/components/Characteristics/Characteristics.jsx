import './Characteristics.css';
import { useEffect, useState } from 'react';
import { productive, creative, innovative, pioneering } from '../../assets/profiles';

const etDescItems = [
    {id: 0, title: "NĂNG ĐỘNG", img: productive, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {id: 1, title: "SÁNG TẠO", img: creative, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {id: 2, title: "ĐỔI MỚI", img: innovative, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {id: 3, title: "TIÊN PHONG", img: pioneering, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
];

export const Characteristics = () => {

    const [isVisible, setIsVisible] = useState(false);  

    const handleScroll = () => {  
        const element = document.querySelector('.characteristics-section');  
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
        <div className={`characteristics-section ${isVisible ? 'visible' : ''}`}>  
            <div className="characteristics-section__heading">  
                ĐIỂM ĐẾN LÝ TƯỞNG CHO SINH VIÊN<br />ĐAM MÊ ỨNG DỤNG KHOA HỌC CÔNG NGHỆ  
            </div>  

            <div className="characteristics-section__items">  
                {  
                    etDescItems.map((item, id) => {  
                        return (  
                            <div key={`desc-${id}`} className="characteristics-section__item">  
                                <img src={item.img} alt={item.title} className="characteristics-section__item-image" />  
                                <div className="characteristics-section__item-title">{item.title}</div>  
                                <div className="characteristics-section__item-desc">{item.desc}</div>  
                            </div>  
                        );  
                    })  
                }  
            </div>  
        </div>
    )
}

