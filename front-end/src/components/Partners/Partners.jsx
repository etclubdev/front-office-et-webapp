import Slider from "react-slick";
import './Partners.css';
import { SliderArrow } from "../SliderArrow";
import { COMPANION_CONTENT, PARTNERS_CONTENT } from '../../constants';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { PageTitle } from "../PageTitle";

export const Partners = ({ partners, companions }) => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "2vw",
        autoplay: false,
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
            <PageTitle>{PARTNERS_CONTENT.title}</PageTitle>
            <div>
                <Slider {...settings}>
                    {partners.map(partner => {
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
            </div>
            <PageTitle>{COMPANION_CONTENT.title}</PageTitle>
            <div>
                <Slider {...settings}>
                    {companions.map(companion => {
                        if (!companion.visible) return null;
                        else
                            return (
                                <div key={companion.partner_id} className="partner">
                                    <img src={companion.avatar_url} alt={companion.partner_name} />
                                    <div className="partner-name">{companion.partner_name}</div>
                                </div>
                            )
                    })}
                </Slider>
            </div>
        </div>
    )
}
