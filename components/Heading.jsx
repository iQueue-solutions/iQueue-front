import styles from "../styles/Heading.module.css";

export const Heading = ({ children }) => {
 return (
  <h1
   className={`text-3xl md:text-8xl md:lowercase font-semibold md:font-light text-center my-5 text-purple-800 ${styles.vertical}`}
  >
   {children}
  </h1>
 );
};
