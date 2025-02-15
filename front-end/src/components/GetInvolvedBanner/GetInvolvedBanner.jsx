import './GetInvolvedBanner.css';
import { GETINVOLVED_CONTENT } from '../../constants.js';

export const GetInvolvedBanner = () => {
    return (
        <div className="get-involved-section">
            <div className="get-involved-title">{GETINVOLVED_CONTENT.title}</div>
            <div className="get-involved-desc">{GETINVOLVED_CONTENT.desc}</div>
            <a href="" className="get-involved-sign-up">{GETINVOLVED_CONTENT.signUp}</a>
        </div>
    )

}
