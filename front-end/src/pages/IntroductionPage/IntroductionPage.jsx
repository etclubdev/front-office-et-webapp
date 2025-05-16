import './IntroductionPage.css';
import { Navbar } from '../../components/Navbar';
import { IntroductionContent } from '../../components/IntroductionContent';
import { introduction } from '../../assets/images/et';
import { textLogo } from '../../assets/images/logos';
import { Link } from 'react-router-dom';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'
import { DynamicBlur } from '../../components/DynamicBlur';

export const IntroductionPage = () => {
    const breadcrumbsData = [
        {
            href: "/",
            title: "Trang chủ"
        },
        {
            href: "#",
            title: "Giới thiệu"
        }
    ]

    return (
        <div className="introduction-page">
            <Navbar />
            <DynamicBlur parentClassName="root-container" />
            <div className="et-avatar">
                <img className='et-img' src={introduction} alt="" />
                <div className="et-cover">
                    {/* <p className="et-text">WE ARE</p> */}
                    <Link to='#' className="nav-item" style={{ margin: "0", padding: "0", height: "fit-content", width: "fit-content", marginTop: "5vw" }}>
                        <p className="nav-item-content" style={{ fontSize: "4vw", marginBottom: "0", fontWeight: "900" }}>WE ARE</p>
                    </Link>
                    <img className="et-logo" src={textLogo} alt="Economic Technology" />
                </div>
            </div>
            <div className="introduction-content">
                <CustomBreadcrumbs data={breadcrumbsData} style={{ width: "70%", paddingBottom: "2vw" }}></CustomBreadcrumbs>
                <IntroductionContent />
            </div>
        </div>
    )
}