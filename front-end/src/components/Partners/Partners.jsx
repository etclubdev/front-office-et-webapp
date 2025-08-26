import Slider from "react-slick";
import './Partners.css';
import { SliderArrow } from "../SliderArrow";
import { COMPANION_CONTENT, PARTNERS_CONTENT } from '../../constants';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { PageTitle } from "../PageTitle";
import { Heading } from "../Typography/Typography";
import Skeleton from '@mui/material/Skeleton';

export const Partners = ({ partners, companions }) => {

    const visiblePartners = partners?.filter(partner => partner.visible);
    const visibleCompanions = companions?.filter(companion => companion.visible);

    if (!visiblePartners || !visibleCompanions || visiblePartners.length === 0 || visibleCompanions.length === 0) {
        return (
            <div className="partners-section">
                <Heading level={1} className="partners-title">{PARTNERS_CONTENT.title}</Heading>
                <div className="skeleton-alt">
                    <Skeleton variant="circular" width="15vw" height="15vw" />
                    <Skeleton variant="circular" width="15vw" height="15vw" />
                    <Skeleton variant="circular" width="15vw" height="15vw" />
                </div>
                <div className="division-bar-container">
                    <div className="division-bar"></div>
                </div>
                <Heading level={1} className="partners-title">{COMPANION_CONTENT.title}</Heading>
                <div className="skeleton-alt">
                    <Skeleton variant="circular" width="15vw" height="15vw" />
                    <Skeleton variant="circular" width="15vw" height="15vw" />
                    <Skeleton variant="circular" width="15vw" height="15vw" />
                </div>
            </div>
        )
    }


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        nextArrow: <SliderArrow icon={faChevronRight} />,
        prevArrow: <SliderArrow icon={faChevronLeft} />,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: true } },
            { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: true } },
            { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: true } }
        ]
    };



    return (
        <div className="partners-section">
            <Heading level={1} className="partners-title">{PARTNERS_CONTENT.title}</Heading>
            <div>
                {visiblePartners.length === 1 ? (
                    <div className="single-partner">
                        <img src={visiblePartners[0].avatar_url} alt={visiblePartners[0].partner_name} />
                        <div className="partner-name">{visiblePartners[0].partner_name}</div>
                        <div className="partner-role">{visiblePartners[0].short_description}</div>
                    </div>
                ) : (
                    <Slider {...settings}>
                        {visiblePartners.map(partner => {
                            if (!partner.visible) return null;
                            else
                                return (
                                    <div key={partner.partner_id} className="partner">
                                        <img src={partner.avatar_url} alt={partner.partner_name} />
                                        <div className="partner-name">{partner.partner_name}</div>
                                        <div className="partner-role">{partner.short_description}</div>
                                    </div>
                                )
                        })}
                    </Slider>
                )}
            </div>
            <div className="division-bar-container">
                <div className="division-bar"></div>
            </div>
            <Heading level={1} className="partners-title">{COMPANION_CONTENT.title}</Heading>
            <div>
                {
                    visibleCompanions.length === 1 ? (
                        <div className="single-partner">
                            <img src={visibleCompanions[0].avatar_url} alt={visibleCompanions[0].partner_name} />
                            <div className="partner-name">{visibleCompanions[0].partner_name}</div>
                            <div className="partner-role">{visibleCompanions[0].short_description}</div>
                        </div>
                    ) : (
                        <Slider {...settings}>
                            {visibleCompanions.map(companion => {
                                if (!companion.visible) return null;
                                else
                                    return (
                                        <div key={companion.partner_id} className="partner">
                                            <img src={companion.avatar_url} alt={companion.partner_name} />
                                            <div className="partner-name">{companion.partner_name}</div>
                                            <div className="partner-role">{companion.short_description}</div>
                                        </div>
                                    )
                            })}
                        </Slider>
                    )
                }
            </div>
            <div className="division-bar-container">
                <div className="division-bar"></div>
            </div>
        </div>
    )
}
