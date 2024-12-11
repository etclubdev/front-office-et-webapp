import './Characteristics.css';
import { useEffect, useState } from 'react';
import { characteristicsData } from '../../mocks/data';

const etDescItems = characteristicsData.characteristics;
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
            <div className="characteristics-heading">
                ĐIỂM ĐẾN LÝ TƯỞNG CHO SINH VIÊN<br />ĐAM MÊ ỨNG DỤNG KHOA HỌC CÔNG NGHỆ
            </div>

            <div className="characteristics-items">
                {
                    etDescItems.map((item, id) => {
                        return (
                            <div key={`desc-${id}`} className="characteristics-item">
                                <img src={require(`../../mocks${item.image}`)} alt={item.title} className="characteristics-item-image" />
                                <div className="characteristics-item-title">{item.title}</div>
                                <div className="characteristics-item-desc">{item.desc}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

