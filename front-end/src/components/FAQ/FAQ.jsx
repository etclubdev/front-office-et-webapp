import './FAQ.css';
import { FAQ_TITLE } from '../../constants.js';  

export const FAQ = () => {
    return (
        <div className="FAQ-section">
            <div className="FAQ-title">{FAQ_TITLE}</div>
            {/* <div className="FAQ-desc">{GETINVOLVED_CONTENT.desc}</div> */}
        </div>
    )

}