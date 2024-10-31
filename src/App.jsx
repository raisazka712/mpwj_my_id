import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavbarComponents from "./components/NavbarComponents";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import KategoriPage23 from "./pages/KategoriPage23";
import KategoriPage24 from "./pages/KategoriPage24";
import NominasiPage23 from "./pages/NominasiPage23";
import NominasiPage24 from "./pages/NominasiPage24";
import Event23Page from "./pages/Event23Page";
import Event24Page from "./pages/Event24Page";
import SponsorPage23 from "./pages/SponsorPage23";
import SponsorPage24 from "./pages/SponsorPage24";


function App() {
  return <div>
    <NavbarComponents />
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/Kategori2023" Component={KategoriPage23} />
      <Route path="/Kategori2024" Component={KategoriPage24} />
      <Route path="/Nominasi2023" Component={NominasiPage23} />
      <Route path="/Nominasi2024" Component={NominasiPage24} />
      <Route path="/Event2023" Component={Event23Page} />
      <Route path="/Event2024" Component={Event24Page} />
      <Route path="/Sponsor2023" Component={SponsorPage23} />
      <Route path="/Sponsor2024" Component={SponsorPage24} />
    </Routes>
    <Footer />
  </div>; 
}

export default App;
