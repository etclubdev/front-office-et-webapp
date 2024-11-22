import Slider from "react-slick";
import { partner1, partner2, partner3, partner4, partner5, partner6, partner7 } from "../../assets/partners";

import './Partners.css';

const partners = [
    { id: 0, name: "Anh Phạm Hưởng", role: "CEO & Co-Founder GFI Venture", img: partner1 },
    { id: 1, name: "Anh Văn Viết Hùng", role:"Operations Executive tại CareerBuilder", img: partner2 },
    { id: 2, name: "Anh Nguyễn Thành Đạt", role:"Founder & CEO Công ty TNM Consulting", img: partner3 },
    { id: 3, name: "Anh Ryan Thanh Nguyễn", role:"Engineer Manager in NAB", img: partner4 },
    { id: 4, name: "Anh An Bùi", role:"Analytics & Engineering Manager tại On Point", img: partner5 },
    { id: 4, name: "Anh Thanh Trần", role:"Head of Digital Bank tại OCB", img: partner6 },
    { id: 4, name: "Chị Cara Thảo Phan", role:"Senior BA - Product Owner tại AIA", img: partner7 },
];

export const Partners = () => {

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, width: "2vw", height: "2vw", display: "block", zIndex: 1000, position: "absolute",  top: "8vw", left:"1vw" }}
            onClick={onClick}
          />
        );
      }
    
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
                ...style,
                display: "block",
                height: "auto",
                zIndex: 1000, 
                position: "absolute", 
                top: "8vw",
                right:"2vw",
            }}
            onClick={onClick}
          />
        );
      }  

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "2vw",
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [  
            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: true } }, 
            { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: true } }, 
            { breakpoint: 480, settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: true } }   
        ] 
    };

    return(
        <div className="partners-section">
            <div className="partners__title">CHUYÊN GIA ĐỒNG HÀNH</div>
            <div className="partners__desc">ET chân thành cảm ơn các thầy cô/ anh chị đã đồng hành và ủng hộ hoạt động của CLB</div>
            <div className="partners__background">
              <Slider {...settings}>
                  {partners.map(partner => (
                      <div key={partner.id} className="partner">
                          <img src={partner.img} alt={partner.name} />
                          <div className="partner__name">{partner.name}</div>
                          <div className="partner__role">{partner.role}</div>
                      </div>
                  ))}
              </Slider>
            </div>
            <div className="FAQs-section">
              <div className="partners__title">FAQs</div>
            </div>
        </div>
    )
}
