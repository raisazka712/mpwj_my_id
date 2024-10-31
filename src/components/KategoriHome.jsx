import React from "react"; 

import CosplayPrince from "../assets/DUA_EMPAT/KATEGORI_TXT/VOTING/KATEGORI_1_COSPLAY_PRINCE.png"
import CosplayPrincess from "../assets/DUA_EMPAT/KATEGORI_TXT/VOTING/KATEGORI_1_COSPLAY_PRINCESS.png"
import WibuPalingEvent from "../assets/DUA_EMPAT/KATEGORI_TXT/VOTING/KATEGORI_1_WIBU_PALING_EVENT.png"
import GuestStarAwards from "../assets/DUA_EMPAT/KATEGORI_TXT/VOTING/KATEGORI_1_GUEST_STAR_AWARDS.png"
import IdolTergemesh from "../assets/DUA_EMPAT/KATEGORI_TXT/VOTING/KATEGORI_1_IDOL_TERGEMESH.png"
import DynamicDuo from "../assets/DUA_EMPAT/KATEGORI_TXT/VOTING/KATEGORI_1_DYNAMIC_DUO.png"

import BestBand from "../assets/DUA_EMPAT/KATEGORI_TXT/VotingNPenilaian/KATEGORI_1_BEST_BAND.png"
import BestIdol from "../assets/DUA_EMPAT/KATEGORI_TXT/VotingNPenilaian/KATEGORI_1_BEST_IDOL.png"
import BountyHunter from "../assets/DUA_EMPAT/KATEGORI_TXT/VotingNPenilaian/KATEGORI_1_BOUNTY_HUNT.png"
import Community from "../assets/DUA_EMPAT/KATEGORI_TXT/VotingNPenilaian/KATEGORI_1_COMMUNITY.png"
import DigitalCreator from "../assets/DUA_EMPAT/KATEGORI_TXT/VotingNPenilaian/KATEGORI_1_DIGITAL_CREATOR.png"
import DjAnikura from "../assets/DUA_EMPAT/KATEGORI_TXT/VotingNPenilaian/KATEGORI_1_DJ_ANIKURA.png"

import BestEvent from "../assets/DUA_EMPAT/KATEGORI_TXT/Penilaian/KATEGORI_1_BEST_EVENT.png"
import IdolSong from "../assets/DUA_EMPAT/KATEGORI_TXT/Penilaian/KATEGORI_1_LAGU_ORI_IDOL.png"
import NonIdolSong from "../assets/DUA_EMPAT/KATEGORI_TXT/Penilaian/KATEGORI_1_LAGU_ORI_NON IDOL.png"
import MVAwards from "../assets/DUA_EMPAT/KATEGORI_TXT/Penilaian/KATEGORI_1_MV AWARDS.png"


import {useNavigate} from 'react-router-dom';

const KategoriHome = () => {  
  let navigate = useNavigate();
  return (
    <div className="KategoriHome"> 
      <div>
        <div className="judulKategoriHome"> 
            Kategori Malam Penghargaan Wibu Jogja 2024
        </div> 
        <div className="textKategoriHome">
            Kategori tahun ini sedikit berbeda dengan kategori tahun sebelumnya, dikarenakan ada beberapa kategori tambahan yang akan membuat wibu terguncang akan pilihannya!!
        </div>
      </div>

      <div className="kategoriPost">
        <div className="image-container">
            <img src={CosplayPrince} alt="CosplayPrince" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={CosplayPrincess} alt="CosplayPrincess" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={WibuPalingEvent} alt="WibuPalingEvent" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={GuestStarAwards} alt="GuestStarAwards" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={IdolTergemesh} alt="IdolTergemesh" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={DynamicDuo} alt="DynamicDuo" className="card-image" /> 
        </div>
      </div>

      <div className="kategoriPost">
        <div className="image-container">
            <img src={BestBand} alt="BestBand" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={BestIdol} alt="BestIdol" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={BountyHunter} alt="BountyHunter" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={Community} alt="Community" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={DigitalCreator} alt="DigitalCreator" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={DjAnikura} alt="DjAnikura" className="card-image" /> 
        </div>
      </div>

      <div className="kategoriPost">
        <div className="image-container">
            <img src={BestEvent} alt="BestEvent" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={IdolSong} alt="IdolSong" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={NonIdolSong} alt="NonIdolSong" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={MVAwards} alt="MVAwards" className="card-image" /> 
        </div>
      </div>      

        {/* <div className="textKategoriHome">
            Kamu juga bisa berkontrubsi pada MPWJ tahun ini dengan memberi masukan atau usulan kategori apa yang ingin ditambahkan, bisa  di isi pada link berikut : <br />
            <div className="kategori-btn">
                <button className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => window.open("https://forms.gle/DQTAkgq6ksMAsVFV6", "_blank")}> KATEGORI MPWJ 2024 <br />
                    1st Batch Submission
                </button>
            </div>
        </div> */}

        {/* <div className="announ-btn">
            <button className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => navigate("/Kategori")}> Lihat Selengkapnya 
            </button>
        </div> */}
    </div> 
  )
}

export default KategoriHome;
