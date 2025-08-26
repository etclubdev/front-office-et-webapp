import nextArrow from '../../mocks/images/etnews/nextArrow.png'

export const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <img  
        onClick={onClick}
        style={{
          position: "absolute",
          width: "30px",
          right: "-50px", 
          top: "35%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        src={nextArrow} 
        alt="Next" />
    );
  }