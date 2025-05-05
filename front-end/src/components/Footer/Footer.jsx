import './Footer.css';
import { horizontalLogo } from '../../assets/images/logos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-aboutET">
                    <img className='footer-aboutET-logo' src={horizontalLogo} alt="Logo CLB Công Nghệ Kinh Tế" />
                    <div className="footer-aboutET-title" style={{ fontFamily: "Eurostile" }}>CLB Công Nghệ Kinh Tế</div>
                    <div className="footer-aboutET-desc">Trực thuộc Liên Chi hội Sinh viên khoa Công nghệ thông tin kinh doanh, Đại học Kinh tế TP. Hồ Chí Minh</div>
                </div>
                <div className="footer-item">
                    <div className="footer-item-title">Về ET Club</div>
                    <Link to='/introduction' className="footer-item-content">Giới thiệu</Link>
                    <Link to='/hr-structure' className="footer-item-content">Cơ cấu tổ chức</Link>
                </div>
                <div className="footer-item">
                    <div className="footer-item-title">Hoạt động</div>
                    <Link to='/activities' className="footer-item-content">Chương trình</Link>
                    <Link to='/et-news' className="footer-item-content">ET News</Link>
                    <Link to='/et-blog' className="footer-item-content">ET Blog</Link>
                    <Link to='/collaborator-seeking' className="footer-item-content">Tìm kiếm CTV</Link>
                </div>
                <div className="footer-item">
                    <div className="footer-item-title">Hỗ trợ</div>
                    <Link to='/faqs' className="footer-item-content">FAQs</Link>
                </div>
                <div className="footer-item">
                    <div className="footer-item-title">Follow us</div>
                    <div className="footer-social">
                        <div className="footer-social-icon">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <a className="footer-social-link" href='https://www.facebook.com/groups/955638881998102'>Group cộng đồng</a>
                    </div>
                    <div className="footer-social">
                        <div className="footer-social-icon">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                        <a className="footer-social-link" href='https://www.linkedin.com/company/economic-technology-club-ueh/?originalSubdomain=vn'>Linkedin</a>
                    </div>
                    <div className="footer-social">
                        <div className="footer-social-icon">
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                        <a className="footer-social-link" href='https://www.youtube.com/c/C%C3%A2ul%E1%BA%A1cb%E1%BB%99C%C3%B4ngNgh%E1%BB%87KinhT%E1%BA%BF'>Youtube</a>
                    </div>
                    <div className="footer-social">
                        <div className="footer-social-icon">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <a className="footer-social-link" href='https://www.facebook.com/ETClub.UEH'>Facebook</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-division-bar"></div>
                <p>Developed by Techical Department | ET Club</p>
            </div>
        </div>
    )
}

export default Footer;