import './Departments.css';
import Slider from "react-slick";
import { SliderArrow } from '../SliderArrow';
import { departmentsData } from "../../mocks/data";
import { DEPARTMENT_TITLE } from '../../constants.js';    

const departments = departmentsData.departments;

export const Departments = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "1vw",
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        nextArrow: <SliderArrow />,
        prevArrow: <SliderArrow />,
        responsive: [  
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // Kích thước lớn hơn 1200px  
            { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },  // Kích thước từ 768px đến 1200px  
            { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1 } }   // Kích thước nhỏ hơn 480px  
        ] 
    };

    return (
      <div className="departments-section">  
          <div className="departments-title">{DEPARTMENT_TITLE}</div>  
          <Slider {...settings}>  
            {departments.map(department => (  
              <div key={department.id} className="department">  
                <img src={require(`../../mocks${department.image}`)} alt={department.name} className="department-image" />  
                <button className="department-button">{"BAN " + department.name}</button>  
                <div className="department-hover-overlay">Nội dung hiển thị khi hover</div>  
              </div>  
            ))}  
          </Slider>   
      </div>
    );
}

