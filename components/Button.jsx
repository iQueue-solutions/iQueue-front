import styles from "../styles/Button.module.css";

export const Button = ({ color, variant, onClick, icon, children, margin }) => {
 return (
  <button
   onClick={onClick}
   className={`flex self-center mt-${margin} ${styles.btn} ${styles[color]} ${styles[variant]}`}
  >
   {children}
   {icon && <span className="ml-5">{icon}</span>}
  </button>
 );
};
