import nextArrow from '../../mocks/images/etnews/nextArrow.png'

export const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <img  
        onClick={onClick}
        style={{
          position: "absolute",
          width: "2.5vw",
          right: "-4vw", 
          top: "25%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        src={nextArrow} 
        alt="Next" />
    );
  }