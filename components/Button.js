const styles = [
  'btn--orange--solid',
  'btn--orange--outline',
  'btn--blue--solid',
  'btn--blue--outline',
  'btn--green--solid',
  'btn--green--outline',
  'btn--red--solid',
  'btn--red--outline',
];

const Button = ({text, style, onClick, icon}) => {
  const checkBtnStyle = styles.includes(style) ? style : styles[0]; 
  return (
    <button onClick={onClick} className={`flex ${checkBtnStyle}`} >
      {text}
      {icon}
    </button>
  )
}

export default Button;