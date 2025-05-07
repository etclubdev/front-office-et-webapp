import './Characteristics.css';
import { useEffect, useState } from 'react';
import { characteristicsData } from '../../mocks/data';
import { Available } from '../Available';

const etDescItems = characteristicsData.characteristics;

export const Characteristics = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.querySelector('.characteristics-section');
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight - 100 && position.bottom >= 0) {
            setIsVisible(true);
            element.classList.add('visible');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={'characteristics-section'}>
            <Available when={isVisible} parentClassName={'characteristics-section'}>
                <div className='heading'>
                    <div className='heading-first'>ĐIỂM ĐẾN LÝ TƯỞNG CHO SINH VIÊN ĐAM MÊ</div>
                    <div className='heading-middle'>
                        <div className='word'>ỨNG DỤNG</div>
                        <div className='decor-bar'></div>
                    </div>
                    <div className='heading-last'>KHOA HỌC CÔNG NGHỆ</div>
                </div>
               <div className="chars-container">
                    {
                        etDescItems.map((item, index) => {
                            const classNameIndex = ++index;
                            return (
                                <div className={`char${classNameIndex}-container`}>
                                <div className={`char${classNameIndex}`}>
                                    <div className={`characteristics-item-title c${classNameIndex}`}>{item.title}</div>
                                    <div className={`underline u${classNameIndex}`}></div>
                                    <div className={`characteristics-item-desc b${classNameIndex}`}>{item.desc}</div>
                                </div>
                                <img src={require(`../../mocks${item.image}`)} className={`characteristics-item-image a${classNameIndex}`} />
                            </div> 
                            )
                        })
                    }
               </div>
            </Available>
        </div>
    )
}