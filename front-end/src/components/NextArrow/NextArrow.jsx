import nextArrow from '../../mocks/images/activities/nextArrow.png'

export const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <img  
        onClick={onClick}
        style={{
        position: "absolute",
        right: "-5vw", 
        top: "40%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        }}
        src={nextArrow} 
        alt="Next" />
    );
  }