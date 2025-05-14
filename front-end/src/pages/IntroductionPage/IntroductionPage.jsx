import './IntroductionPage.css';
import { Navbar } from '../../components/Navbar';
import { IntroductionContent } from '../../components/IntroductionContent';

import { introduction } from '../../assets/images/et';
import { textLogo } from '../../assets/images/logos';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';

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
                <div className="breadcrumb-container" style={{ width: "70%", paddingTop:"2vw" }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to='/' className="nav-item">
                        <p className="nav-item-content">Trang chủ</p>
                    </Link>
                    <Link to='#' className="nav-item">
                        <p className="nav-item-content">Giới thiệu</p>
                    </Link>
                </Breadcrumbs>
            </div>
                <IntroductionContent />
            </div>
        </div>
    )
}