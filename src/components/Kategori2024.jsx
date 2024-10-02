import React from "react";
import {Row,} from "react-bootstrap";

import RewardByVoting from "../assets/DUA_EMPAT/KATEGORI_HOME/SLIDE_2.png"
import RewardByVotingAndAssesment from "../assets/DUA_EMPAT/KATEGORI_HOME/SLIDE_3.png"
import RewardByJudging from "../assets/DUA_EMPAT/KATEGORI_HOME/SLIDE_4.png"
import RewardByRecommend from "../assets/DUA_EMPAT/KATEGORI_HOME/REKOMENDASI.png"


const Kategori2024 = () => { 
  return (
    <div className="Kategori2024">  
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
            <img src={RewardByVoting} alt="RewardByVoting" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={RewardByVotingAndAssesment} alt="RewardByVotingAndAssesment" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={RewardByJudging} alt="RewardByJudging" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={RewardByRecommend} alt="RewardByRecommend" className="card-image" /> 
        </div>
      </div>

        <div className="textKategoriHome">
            Kamu juga bisa berkontrubsi pada MPWJ tahun ini dengan memberi masukan atau usulan kategori apa yang ingin ditambahkan, bisa  di isi pada link berikut : <br />
            <div className="kategori-btn">
                <button className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => window.open("https://forms.gle/DQTAkgq6ksMAsVFV6", "_blank")}> KATEGORI MPWJ 2024 <br />
                    1st Batch Submission
                </button>
            </div>
        </div>

    </div> 
  )
}

export default Kategori2024;
