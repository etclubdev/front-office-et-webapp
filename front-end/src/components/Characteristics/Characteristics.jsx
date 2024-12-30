import './Characteristics.css';
import { useEffect, useState } from 'react';
import { characteristicsData } from '../../mocks/data';
import { Available } from '../Available';
import { CHARACTERISTICS_TITLE } from '../../constants';

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
                <div className="characteristics-heading">{CHARACTERISTICS_TITLE.firstPart}<br />{CHARACTERISTICS_TITLE.secondPart}</div>
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
            </Available>
        </div>
    )
}

