import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
 return (
  <div className="flex flex-col">
   <Navbar />
   <div className="flex flex-col md:mt-10 items-center md:bg-blue-300">
    <main
     className={`md:w-11/12 w-full bg-slate-50 mt-5 md:mt-20 pb-5 ${styles.minHeight}`}
    >
     {children}
    </main>
   </div>
   <Footer />
  </div>
 );
}
