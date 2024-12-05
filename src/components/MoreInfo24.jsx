import React from "react";
 
import RUNDOWN_1 from "../assets/DUA_EMPAT/INFO/RUNDOWN_1.png"
import RUNDOWN_2 from "../assets/DUA_EMPAT/INFO/RUNDOWN_2.png"
 
 
const MoreInfo24 = () => { 
  return (
    <div className="Performer23">  
      <div>
        <div className="judulPerformer23">
            More Information About Malam Penghargaan Wibu Jogja 2024
        </div> 
      </div>
      <div className="kategoriPost">
        <div className="image-container">
            <img src={RUNDOWN_1} alt="RUNDOWN_1" className="card-image" /> 
        </div>
        <div className="image-container">
            <img src={RUNDOWN_2} alt="RUNDOWN_2" className="card-image" /> 
        </div>
      </div>
    </div> 
  )
}

export default MoreInfo24;
