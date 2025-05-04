import prevArrow from '../../mocks/images/etnews/prevArrow.png'

export const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <img 
        onClick={onClick} 
        style={{
          position: "absolute",
          width: "2.5vw",
          left: "-5vw", 
          top: "25%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        src={prevArrow} 
        alt="Previous" />
    );
  }