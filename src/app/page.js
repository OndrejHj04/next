import Image from "next/image";
import "./styles/index.css";
import IntroPage from "./pages/IntroPage";
import MenuPage from "./pages/Menu";
import Activities from "./pages/Activities";
import Facility from "./pages/Facility";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <MenuPage />
      <div className="overflow-y-scroll overflow-x-hidden flex-1">
        <IntroPage />
        <Facility />
        <Activities />
        <Gallery />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}