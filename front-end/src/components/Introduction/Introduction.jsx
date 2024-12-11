import './Introduction.css';
import { noTextLogo } from '../../assets/images/logos';


export const Introduction = () => {
    return (
        <div className="intro-section">
            <div className="intro-content">
                <div className="intro-title">Economic<br/>Technology</div>
                <div className="intro-desc">Câu lạc bộ Công nghệ Kinh tế - ET Club được thành lập vào ngày 25/05/2018 trực thuộc LCH SV Khoa BIT Đại học Kinh tế TP.HCM</div>
                <div className="intro-more">Tìm hiểu thêm..</div>
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

                <img className="intro-img backgr" src={noTextLogo} alt="" />
                <img className="intro-img" src={noTextLogo} alt="" />
            </div>
        </div>
    )
}