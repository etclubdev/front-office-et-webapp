import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const SliderArrow = (props) => {
  const { className, onClick, icon } = props;

  return (
    <FontAwesomeIcon
      className={`${className} custom-arrow`}
      style={{
        height: "100%",
        color: "#fff",
        position: "absolute",
        top: "50%",
        zIndex: 2,
        transition: "opacity 0.3s ease-in-out",
        opacity: 0,
        width: "1vw",
      }}
      onClick={onClick}
      icon={icon}
    />
  );
};