import './Footer.css';
import { horizontalLogo } from '../../assets/images/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faYoutube, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className="footer">  
            <div className="footer-aboutET">  
                <img className='footer-aboutET-logo' src={horizontalLogo} alt="Logo CLB Công Nghệ Kinh Tế" />  
                <div className="footer-aboutET-title" style={{ fontFamily: "EurostileDemi" }}>CLB Công Nghệ Kinh Tế</div>  
                <div className="footer-aboutET-desc">Trực thuộc Liên Chi hội Sinh viên khoa Công nghệ thông tin kinh doanh, Đại học Kinh tế TP. Hồ Chí Minh</div>  
            </div>  
            <div className="footer-item">  
                <div className="footer-item-title">Hoạt động</div>  
                <div className="footer-item-content">Talkshow/Workshop</div>  
                <div className="footer-item-content">Cuộc thi</div>  
                <div className="footer-item-content">Chuỗi hoạt động nâng cao năng lực công nghệ cho sinh viên</div>  
                <div className="footer-item-content">Hoạt động nội bộ</div>  
            </div>  
            <div className="footer-item">  
                <div className="footer-item-title">Giới thiệu</div>  
                <div className="footer-item-content">Về ET Club</div>  
                <div className="footer-item-content">Cơ cấu tổ chức</div>  
                <div className="footer-item-content">ET News</div>  
                <div className="footer-item-content">Chương trình tuyển CTV</div>  
                <div className="footer-item-content">Liên hệ</div>  
            </div>  
            <div className="footer-item">  
                <div className="footer-item-title">Hỗ trợ</div>  
                <div className="footer-item-content">FAQs</div>  
            </div>  
            <div className="footer-item">  
                <div className="footer-item-title">Follow us</div>  
                <div className="footer-social">  
                    <div className="footer-social-icon">  
                        <FontAwesomeIcon icon={faFacebook} style={{ color: '#fddb2a' }} />   
                    </div>  
                    <a className="footer-social-link" href='https://www.facebook.com/groups/955638881998102'>Group cộng đồng</a>  
                </div>  
                <div className="footer-social">  
                    <div className="footer-social-icon">  
                        <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#fddb2a' }} />
                    </div>  
                    <a className="footer-social-link" href='https://www.linkedin.com/company/economic-technology-club-ueh/?originalSubdomain=vn'>Linkedin</a>  
                </div>  
                <div className="footer-social">  
                    <div className="footer-social-icon">  
                        <FontAwesomeIcon icon={faYoutube} style={{ color: '#fddb2a' }} /> 
                    </div>  
                    <a className="footer-social-link" href='https://www.youtube.com/c/C%C3%A2ul%E1%BA%A1cb%E1%BB%99C%C3%B4ngNgh%E1%BB%87KinhT%E1%BA%BF'>Youtube</a>  
                </div>  
                <div className="footer-social">  
                    <div className="footer-social-icon">  
                        <FontAwesomeIcon icon={faFacebook} style={{ color: '#fddb2a' }} />    
                    </div>  
                    <a className="footer-social-link" href='https://www.facebook.com/ETClub.UEH'>Facebook</a>  
                </div>  
            </div>  
        </div>      
    )
}

export default Footer;