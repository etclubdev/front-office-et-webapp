import './IntroductionPage.css';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { IntroductionContent } from '../../components/IntroductionContent';

import { introduction } from '../../assets/images/et';
import { textLogo } from '../../assets/images/logos';

export const IntroductionPage = () => {
    return (
        <div className="introduction-page">
            <Navbar />
            <div className="et-avatar">
                <img className='et-img' src={introduction} alt="" />
                <div className="et-cover">
                    <p className="et-text">WE ARE</p>
                    <img className="et-logo" src={textLogo} alt="Economic Technology" />
                </div>
            </div>
            <div className="introduction-content">
                <IntroductionContent />
            </div>
            <Footer />
        </div>
    )
}