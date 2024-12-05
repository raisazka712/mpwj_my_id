import React from "react";
 
import TouchGrass from "../assets/DUA_EMPAT/PERFORMER/TouchGrass.png"
import Dihanesa from "../assets/DUA_EMPAT/PERFORMER/Dihanesa.png"
import WAGMI from "../assets/DUA_EMPAT/PERFORMER/WAGMI.png"

import ZaSteiro from "../assets/DUA_EMPAT/PERFORMER/ZaSteiro.png"
import UKS from "../assets/DUA_EMPAT/PERFORMER/UKS.png"
 

const Performer23 = () => { 
  return (
    <div className="Performer23"> 
      <div>
        <div className="judulPerformer23">
            Performer Malam Penghargaan Wibu Jogja 2024
        </div> 
        <div className="textPerformer23">
            Berikut list Performer yang akan memeriahkan Malam Penghargaan Wibu Jogja 2024
        </div>
      </div>
      <div className="kategoriPost">
        <div className="image-container">
            <img src={TouchGrass} alt="TouchGrass" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={Dihanesa} alt="Dihanesa" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={WAGMI} alt="WAGMI" className="card-image" /> 
        </div>
      

        <div className="image-container">
            <img src={ZaSteiro} alt="ZaSteiro" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={UKS} alt="UKS" className="card-image" /> 
        </div>
      </div>
    </div> 
  )
}

export default Performer23;
