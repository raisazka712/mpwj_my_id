import React from "react";

import PengumumanKlasemenSementara from "../assets/DUA_EMPAT/KLASEMEN/NOV/PENGUMUMAN_02.png"
import PRINCE_SEMENTARA from "../assets/DUA_EMPAT/KLASEMEN/NOV/PRINCE_KLASEMEN_02.png"
import PRINCESS_SEMENTARA from "../assets/DUA_EMPAT/KLASEMEN/NOV/PRINCESS_KLASEMEN_02.png"

import WIBU_SEMENTARA from "../assets/DUA_EMPAT/KLASEMEN/NOV/WIBU_KLASEMEN__02.png"
import IDOL_SEMENTARA from "../assets/DUA_EMPAT/KLASEMEN/NOV/IDOL_KLASEMEN_02.png"
import IDOL_GEMES_SEMENTARA from "../assets/DUA_EMPAT/KLASEMEN/NOV/IDOL_GEMES_KLASEMEN_02.png"

import DJ_SEMENTARA from "../assets/DUA_EMPAT/KLASEMEN/NOV/DJ_KLASEMEN_02.png"
import BAND_SEMENTARA from "../assets/DUA_EMPAT/KLASEMEN/NOV/BAND_KLASEMEN_02.png"
 
const NominasiHome = () => { 

  return ( 
    <div className="NominasiHome">
      <div> 
      <div className="judulNominasiHome">
            Klasemen Sementara Malam Penghargaan Wibu Jogja tahun 2024
      </div> 
        <div className="kategoriPost">
            <div className="image-container">
                <img src={PengumumanKlasemenSementara} alt="PengumumanKlasemenSementara" className="card-image" /> 
            </div>
            <div className="image-container">
                <img src={PRINCE_SEMENTARA} alt="PRINCE_SEMENTARA" className="card-image" /> 
            </div>
            <div className="image-container">
                <img src={PRINCESS_SEMENTARA} alt="PRINCESS_SEMENTARA" className="card-image" /> 
            </div>
          

            <div className="image-container">
                <img src={WIBU_SEMENTARA} alt="WIBU_SEMENTARA" className="card-image" /> 
            </div>
            <div className="image-container">
                <img src={IDOL_SEMENTARA} alt="IDOL_SEMENTARA" className="card-image" /> 
            </div>
            <div className="image-container">
                <img src={IDOL_GEMES_SEMENTARA} alt="IDOL_GEMES_SEMENTARA" className="card-image" /> 
            </div>


            <div className="image-container">
                <img src={BAND_SEMENTARA} alt="BAND_SEMENTARA" className="card-image" /> 
            </div>
            <div className="image-container">
                <img src={DJ_SEMENTARA} alt="DJ_SEMENTARA" className="card-image" /> 
            </div>
        </div> <br /><br /><br />


        <div className="judulNominasiHome">
            Nominasi Malam Penghargaan Wibu Jogja 2024 
        </div> 
        <div className="textNominasiPage">
              Malam Penghargaan Wibu Jogja tahun 2024, Setiap Kategori rata-rata memiliki 10 Nominasi, dan setiap Nominasi merupakan pilihan seluruh Wibu dari Yogyakarta dan sekitarnya!🌟
        </div> <br /><br/>
        <div className="textNominasiHome">   
            Jangan lewatkan kesempatan untuk mendukung para nominasi terbaik di Malam Penghargaan Wibu Jogja 2024! 🌟 Kamu bisa ikut memilih mereka yang paling berkesan dengan memberikan suaramu melalui link berikut : <br/>
            <div className="kategori-btn">
                <button className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => window.open("https://tinyurl.com/MPWJ2024?fbclid=PAZXh0bgNhZW0CMTEAAaYzdTGQ0iD3tRLB5uXbTKiGri4F0baWOrPpaPKRwAtHvlNy90cb92q3g1A_aem_EClFkq5rBEhmQxXsDvkHdg", "_blank")}> VOTING DISINI
                </button>
            </div>
        </div>
        <div className="textNominasiHome">   
            Ingin memberi dukungan lebih? Kamu juga bisa berpartisipasi melalui donasi di Traktir! Setiap     donasi Rp. 1.000 setara dengan 1 poin untuk nominasi yang kamu dukung. Semua donasi yang masuk akan digunakan sepenuhnya untuk keberlangsungan acara ini.

            <div className="kategori-btn">
                <button className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => window.open("https://trakteer.id/srawung%20no%20matsuri?fbclid=PAZXh0bgNhZW0CMTEAAaaCOKOc9g_d5jeosxa8CdlO1FUhui1vuNvq8ba7L5IE4m5a1NwFPuihBTI_aem_SiFNSWTw-L0t_DgRpQU-1Q", "_blank")}> TRAKTEER DISINI
                </button>
            </div>
        </div> <br />
       

      </div>

    </div> 
  )
}

export default NominasiHome;
