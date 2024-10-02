import React from "react";
import Header from "../components/Header";
import Sejarah from "../components/SejarahMpwj";
import KategoriHome from "../components/KategoriHome";
import NominasiHome from "../components/NominasiHome";
import PerformerHome from "../components/PerformerHome";

import WoroWOro from "../assets/DUA_EMPAT/WOROWORO.png"

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
