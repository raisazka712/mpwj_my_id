import React from "react";
import Header from "../components/Header";
import Sejarah from "../components/SejarahMpwj";
import KategoriHome from "../components/KategoriHome";
import NominasiHome from "../components/NominasiHome";
import PerformerHome from "../components/PerformerHome";
import WoroWOro from "../assets/DUA_EMPAT/WOROWORO.png"

import NominasiPrince24 from "../components/NominasiPrince24";
import NominasiPrincess24 from "../components/NominasiPrincess24";
import NominasiBountyHunter24 from "../components/NominasiBountyHunter24";
import NominasiDjAnikura24 from '../components/NominasiDjAnikura24';
import NominasiWibuPalingEvent24 from '../components/NominasiWibuPalingEvent24';
import NominasiBestIdol24 from '../components/NominasiBestIdol24';
import NominasiIdolGumush24 from '../components/NominasiIdolGumush24';
import NominasiDynamicDuo24 from '../components/NominasiDynamicDuo24';
import NominasiBand24 from '../components/NominasiBand24';
import NominasiContentCreator24 from '../components/NominasiContentCreator24';
import NominasiGS24 from '../components/NominasiGS24';
import NominasiKomunitas24 from '../components/NominasiKomunitas24';

import {useNavigate} from 'react-router-dom'; 

const HomePage = () => {
  let navigate = useNavigate(); 
  return (  
    <div className="homepage">
      <header className="w-100 min-vh-100">
        <div className="home w-100 min-vh-100">
           <Header />  
           <Sejarah />
           <KategoriHome /> 
           <NominasiHome /> 
 
           <NominasiPrince24 /> 
           <NominasiPrincess24 />
           <NominasiWibuPalingEvent24 />
           <NominasiIdolGumush24 /> 
           <NominasiBestIdol24 />
           <NominasiDynamicDuo24 />
           <NominasiBountyHunter24 />
           <NominasiGS24 />
           <NominasiContentCreator24 />
           <NominasiBand24 />
           <NominasiKomunitas24 />
           <NominasiDjAnikura24 />

            {/* button selengkapnya */}
            {/* <div className="announ-btn"> 
              <button className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => navigate("/Nominasi")}> Lihat Selengkapnya 
              </button>
            </div> */}
           {/* <PerformerHome /> */}
            <div className="Event24Home">  
              <div className="judulEvent24Home">
                  Malam Penghargaan Wibu Jogja 2024 (Coming Soon)
              </div> 
                <img src={WoroWOro} alt="WoroWOro" className="Comingsoon" />
            </div> 
        </div>
      </header>
    </div> 
  )
}

export default HomePage;
