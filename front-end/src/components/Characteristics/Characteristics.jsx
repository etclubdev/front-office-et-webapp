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
                    <div className="char1-container">
                        <div className="char1">
                            <div className="characteristics-item-title c1">{etDescItems[0].title}</div>
                            <div className="underline u1"></div>
                            <div className="characteristics-item-desc b1">{etDescItems[0].desc}</div>
                        </div>
                        <img src={require(`../../mocks/images/profiles/productive.jpg`)} className="characteristics-item-image a1" alt='img'/>
                    </div>
                    <div className="char2-container">
                        <div className="char2">
                            <div className="characteristics-item-title c2">{etDescItems[2].title}</div>
                            <div className="underline u2"></div>
                            <div className="characteristics-item-desc b2">{etDescItems[2].desc}</div>
                        </div>
                        <img src={require(`../../mocks/images/profiles/pioneering.jpg`)} className="characteristics-item-image a2" alt='img'/>
                    </div>
                    <div className="char3-container">
                        <div className="char3">
                            <div className="characteristics-item-title c3">{etDescItems[1].title}</div>
                            <div className="underline u3"></div>
                            <div className="characteristics-item-desc b3">{etDescItems[1].desc}</div>
                        </div>
                        <img src={require(`../../mocks/images/profiles/creative.jpg`)} className="characteristics-item-image a3" alt='img'/>
                    </div>
                    <div className="char4-container">
                        <div className="char4">
                            <div className="characteristics-item-title c4">{etDescItems[3].title}</div>
                            <div className="underline u4"></div>
                            <div className="characteristics-item-desc b4">{etDescItems[3].desc}</div>
                        </div>
                        <img src={require(`../../mocks/images/profiles/innovative.jpg`)} className="characteristics-item-image a4" alt='img'/>
                    </div>
               </div>
            </Available>
        </div>
    )
}