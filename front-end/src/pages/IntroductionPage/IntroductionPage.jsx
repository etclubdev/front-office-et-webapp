import './IntroductionPage.css';
// import NavbarV2 from '../../components/NavbarV2';
// import Footer from '../../components/Footer';
import { IntroductionContent } from '../../components/IntroductionContent';

import { et1 } from '../../assets/images/et';
import { textLogo } from '../../assets/images/logos';

export const IntroductionPage = () => {
    return (
        <div className="introduction-page">
            {/* <NavbarV2 /> */}
            <div className="et-avatar">
                <img className='et-img' src={et1} alt="" />
                <div className="et-cover">
                    <p className="et-text">WE ARE</p>
                    <img className="et-logo" src={textLogo} alt="Economic Technology" />
                </div>
            </div>
            <div className="introduction-content">
                <IntroductionContent />
            </div>
            {/* <Footer /> */}
        </div>
    )
}