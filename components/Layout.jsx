import React, {useState, useEffect} from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import styles from "../styles/Layout.module.css";
import {useLocalStorage} from "../utlis/useLocalStorage";

export const LayoutContext = React.createContext(undefined);

export default function Layout({ children }) {
  const [localUser, setLocalUser] = useLocalStorage("user", {});
  const [user, setUser] = useState({});

  // fix hydration error
  useEffect(() => {
    setUser(localUser);
  }, []);

  useEffect(() => {
    setLocalUser(user);
  }, [user]);

  return (
    <LayoutContext.Provider value={{user, setUser}}>
      <div className="flex flex-col"> <Navbar />
       <div className="flex flex-col md:mt-10 items-center md:bg-blue-300">
        <main
         className={`md:w-11/12 w-full bg-slate-50 mt-5 md:mt-20 pb-5 ${styles.minHeight}`}
        >
         {children}
        </main>
       </div>
       <Footer />
      </div>
    </LayoutContext.Provider>
  );
}
