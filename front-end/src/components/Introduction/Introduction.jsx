import './Introduction.css';
import Slider from "react-slick";
import { SliderArrow } from '../SliderArrow';
import { bannerData } from "../../mocks/data";

 const banners = bannerData.banners;
export const Introduction = ({scrollToRef}) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "1vw",
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        nextArrow: <SliderArrow />,
        prevArrow: <SliderArrow />,
        responsive: [  
            { breakpoint: 1200, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Kích thước lớn hơn 1200px  
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },  // Kích thước từ 768px đến 1200px  
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }   // Kích thước nhỏ hơn 480px  
        ] 
    };

    return (
        <div className="banner-section">
            <Slider {...settings}>  
            {banners.map(banner => (  
              <div key={banner.id} className="banner">  
                <img src={require(`../../mocks${banner.image}`)} alt={banner.title} className="banner" /> 
              </div>  
            ))}  
          </Slider> 
        </div>
    )
}