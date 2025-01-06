import Slider from "react-slick";
import './Partners.css';
import { SliderArrow } from "../SliderArrow";
import { partnersData } from "../../mocks/data";
import { companionsData } from "../../mocks/data";
import { COMPANION_CONTENT, PARTNERS_CONTENT } from '../../constants';


const partners = partnersData.partners;
const companions = companionsData.companions;
export const Partners = () => {

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
        nextArrow: <SliderArrow />,
        prevArrow: <SliderArrow />,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: true } },
            { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: true } },
            { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1, centerMode: true } }
        ]
    };

    return (
        <div className="partners-section">
            <div className="partners-title">{PARTNERS_CONTENT.title}</div>
            <div className="partners-desc">{PARTNERS_CONTENT.desc}</div>
            <div className="partners-background">
                <Slider {...settings}>
                    {partners.map(partner => (
                        <div key={partner.id} className="partner">
                            <img src={require(`../../mocks${partner.image}`)} alt={partner.name} />
                            <div className="partner-name">{partner.name}</div>
                            <div className="partner-role">{partner.role}</div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="companions-title">{COMPANION_CONTENT.title}</div>
            <div className="companions-desc">{COMPANION_CONTENT.desc}</div>
            <div className="companions-background">
                <Slider {...settings}>
                    {companions.map(companion => (
                        <div key={companion.id} className="partner">
                            <img src={require(`../../mocks${companion.image}`)} alt={companion.name} />
                            <div className="partner-name">{companion.name}</div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
