import styles from "../styles/Button.module.css";

export const Button = ({ color, variant, onClick, icon, children }) => {
 return (
  <button
   onClick={onClick}
   className={`flex mt-10 self-center ${styles.btn} ${styles[color]} ${styles[variant]}`}
  >
   {children}
   <span className="ml-5">{icon}</span>
  </button>
 );
};
