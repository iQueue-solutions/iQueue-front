import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export default function Layout({ children }) {
 return (
  <div className="flex flex-col">
   <main className="overflow-x-hidden">{children}</main>
   <Footer></Footer>
  </div>
 );
}
