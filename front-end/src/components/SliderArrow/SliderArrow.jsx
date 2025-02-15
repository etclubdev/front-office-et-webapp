export const SliderArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",  // Center vertically
        transform: "translateY(-50%)", // Align to the center
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}