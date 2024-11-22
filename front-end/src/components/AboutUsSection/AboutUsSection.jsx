import { verticalLogo } from '../../assets/logos';
import etImg from '../../assets/profiles/et.png';
import './AboutUsSection.css';
import { useState, useEffect } from 'react';

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
                    <div className='bio--name'>Câu lạc bộ<br/>Công nghệ Kinh Tế</div> 
                </div>

                <div id='detail-item-1' className="bio--detail">
                    <p className='detail-desc'>ET Club là một trong những Câu lạc bộ lớn tại UEH, hoạt động chuyên sâu trong lĩnh vực ứng dụng Công Nghệ vào đời sống thực tế. Trải qua hơn 6 năm hình thành và phát triển, ET Club đã tổ chức hơn 50 sự kiện, mang lại giá trị sâu sắc trong việc ứng dụng các Công Nghệ hiện đại vào nhiều lĩnh vực khác nhau cho hơn 1500 sinh viên tại UEH.</p>
                    <img className='detail-img' src={etImg} alt="" />
                </div>

                <div id='detail-item-2' className="bio--detail">
                    <img className='detail-img' src={etImg} alt="" />
                    <p className='detail-desc'>Với sứ mệnh kết nối các Công Nghệ hiện đại vào các lĩnh vực Kinh Tế thực tiễn, chúng tôi đã và đang không ngừng nỗ lực nâng cao năng lực ứng dụng Công Nghệ của sinh viên thông qua các hoạt động của Câu Lạc Bộ. </p>
                </div>
            </div>
        </div>
    )
}
