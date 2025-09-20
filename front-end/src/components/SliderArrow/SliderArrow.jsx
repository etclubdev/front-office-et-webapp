import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const SliderArrow = (props) => {
  const { className, onClick, icon } = props;

  return (
    <FontAwesomeIcon
      className={`${className} custom-arrow`}
      style={{
        height: "100%",
        color: "#1d2f5c",
        position: "absolute",
        top: "49.5%",
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