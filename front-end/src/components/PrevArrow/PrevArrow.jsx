import prevArrow from '../../mocks/images/etnews/prevArrow.png'

export const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <img 
        onClick={onClick} 
        style={{
          position: "absolute",
          width: "30px",
          left: "-50px", 
          top: "35%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        src={prevArrow} 
        alt="Previous" />
    );
  }