import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";

const Layout = () => (
  <div className="min-h-screen flex flex-col relative">
    <TopBar />
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <BackToTopButton />
  </div>
);

export default Layout;
