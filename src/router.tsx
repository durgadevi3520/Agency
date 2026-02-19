import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import TourGuide from "./pages/TourGuide";
import Services from "./pages/Services";
import Tourpackages from "./pages/Tourpackages";
import Vehicles from "./pages/Vehicles";
import HoneymoonOffers from "./pages/HoneymoonOffers";
import Booking from "./pages/Booking";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tourguide" element={<TourGuide />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Tourpackages />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/honeymoon" element={<HoneymoonOffers />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}
