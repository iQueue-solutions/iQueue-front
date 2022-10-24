import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export default function Layout({ children }) {
 return (
  <div className="flex flex-col">
   <Navbar />
   <div className="flex flex-col mt-10 items-center bg-blue-300">
    <main className="w-11/12 bg-slate-50 mt-20 pb-5">{children}</main>
   </div>
   <Footer />
  </div>
 );
}
