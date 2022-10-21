export const Button = ({
 color = "orange",
 variant = "solid",
 onClick,
 icon,
 children,
}) => {
 return (
  <button onClick={onClick} className={`flex btn--${color}--${variant}`}>
   {children}
   {icon}
  </button>
 );
};
