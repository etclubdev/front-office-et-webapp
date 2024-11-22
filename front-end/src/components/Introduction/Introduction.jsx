import './Introduction.css';
import { noTextLogo } from '../../assets/logos';

export const Introduction = () => {
    return (
        <div className="intro-section">
            <div className="intro__content">
                <div className="intro__title">Economic<br/>Technology</div>
                <div className="intro__desc">Câu lạc bộ Công nghệ Kinh tế - ET Club được thành lập vào ngày 25/05/2018 trực thuộc LCH SV Khoa BIT Đại học Kinh tế TP.HCM</div>
                <div className="intro__more">Tìm hiểu thêm..</div>
            </div>
            <div className="intro__logo">
                <div className='intro__blur item-1'>
                    <div className="intro__blur__item sub-item-1">
                        <div className="intro__blur__item sub-item-2">
                            <div className="intro__blur__item sub-item-3">
                            </div>
                        </div>
                    </div>
                </div>

                <div className='intro__blur item-2'>
                    <div className="intro__blur__item sub-item-1">
                        <div className="intro__blur__item sub-item-2">
                            <div className="intro__blur__item sub-item-3">
                            </div>
                        </div>
                    </div>
                </div>

                <img className="intro__img backgr" src={noTextLogo} alt="" />
                <img className="intro__img" src={noTextLogo} alt="" />
            </div>
        </div>
    )
}