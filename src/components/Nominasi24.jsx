import React from "react";
 
const Nominasi24 = () => { 

  return ( 
    <div className="NominasiPage">
      <div>
        <div className="judulNominasiPage">
            Nominasi Malam Penghargaan Wibu Jogja 2024
        </div> 
        <div className="textNominasiPage"> 
            Berikut Kategori yang kami harap kalian bantu untuk memilih Nominasinya dengan sistem Polling dan Rekomendasi :  <br/>
              1. Cosplay Prince Jogja 2024  <br/>
              2. Cosplay Princess Jogja 2024  <br/>
              3. Wibu Paling event 2024  <br/>
              4. Konten Kreator Paling Wibu 2024  <br/>
              5. Dynamic Duo   <br/> <br/>
            Pemilihan Nominasi MPWJ tahun ini bisa di isi pada link berikut : <br/>
            <div className="kategori-btn">
                <button className={`btn btn-success btn-lg rounded-2 mt-5`} onClick={() => window.open("https://tinyurl.com/MPWJ2024submit", "_blank")}> SUBMISSION MPWJ 2024
                </button>
            </div>
        </div>
      </div>


    </div> 
  )
}

export default Nominasi24;
