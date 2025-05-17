import './IntroductionPage.css';
import { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { IntroductionContent } from '../../components/IntroductionContent';
import { introduction } from '../../assets/images/et';
import { textLogo } from '../../assets/images/logos';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs'
import { DynamicBlur } from '../../components/DynamicBlur';
import { CircularLoading } from '../../components/CircularLoading';
import styled from 'styled-components';

export const IntroductionPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading...">
                <Navbar />
                <CircularLoading />;
            </div>
        )
    }

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

    const ResponsiveBreadcrumbs = styled(CustomBreadcrumbs)`
        width: 70%;
        padding-bottom: 2vw;
        top: 1vw;

        @media screen and (max-width: 768px) {
            top: 1vw;
        }
        `;


    return (
        <div className="introduction-page">
            <Navbar />
            <DynamicBlur parentClassName="root-container" />
            <div className="et-avatar">
                <img className='et-img' src={introduction} alt="" />
                <div className="et-cover">
                    {/* <p className="et-text">WE ARE</p> */}
                    <p className="we-are">WE ARE</p>
                    <img className="et-logo" src={textLogo} alt="Economic Technology" />
                </div>
            </div>
            <div className="introduction-content">
                <ResponsiveBreadcrumbs data={breadcrumbsData} style={{ width: "70%", paddingBottom: "2vw", top: "1vw" }}></ResponsiveBreadcrumbs>
                <IntroductionContent />
            </div>
        </div>
    )
}