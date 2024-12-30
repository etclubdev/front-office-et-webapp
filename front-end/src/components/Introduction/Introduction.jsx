import './Introduction.css';
import { noTextLogo } from '../../assets/images/logos';
import { INTRODUCTION_CONTENT } from '../../constants';

export const Introduction = ({scrollToRef}) => {
    return (
        <div className="intro-section">
            <div className="intro-content">
                <div className="intro-title">{INTRODUCTION_CONTENT.title}</div>
                <div className="intro-desc">{INTRODUCTION_CONTENT.desc}</div>
                <div className="intro-more" onClick={scrollToRef}>{INTRODUCTION_CONTENT.more}</div>
            </div>
            <div className="intro-logo">
                <div className='intro-blur item-1'>
                    <div className="intro-blur-item sub-item-1">
                        <div className="intro-blur-item sub-item-2">
                            <div className="intro-blur-item sub-item-3">
                            </div>
                        </div>
                    </div>
                </div>

                <div className='intro-blur item-2'>
                    <div className="intro-blur-item sub-item-1">
                        <div className="intro-blur-item sub-item-2">
                            <div className="intro-blur-item sub-item-3">
                            </div>
                        </div>
                    </div>
                </div>

                <img className="intro-img backgr" src={noTextLogo} alt="Logo ET Club" />
                <img className="intro-img" src={noTextLogo} alt="Logo ET Club" />
            </div>
        </div>
    )
}