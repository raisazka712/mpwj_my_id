import React from 'react'

import Nominasi23 from '../components/Nominasi23';

import NominasiPrince23 from '../components/NominasiPrince23';
import NominasiPrincess23 from '../components/NominasiPrincess23';
import NominasiPanutan23 from '../components/NominasiWibuPanutan23';
import NominasiEvent23 from '../components/NominasiEvent23';
import NominasiBestEO23 from '../components/NominasiBestEO23';
import NominasiWibuPalingEvent23 from '../components/NominasiWibuPalingEvent23';
import NominasiBestIdol23 from '../components/NominasiBestIdol23';
import NominasiIdolGumush23 from '../components/NominasiIdolGumush23';
import NominasiMC23 from '../components/NominasiMC23';
import NominasiBand23 from '../components/NominasiBand23';
import NominasiSpotPalingWibu23 from '../components/NominasiSpotPalingWibu23';
import NominasiGS23 from '../components/NominasiGS23';
import NominasiKomunitas23 from '../components/NominasiKomunitas23';

const NominasiPage23 = () => {
  return (
    <div className='nominasiPage'> 
      <header className="w-100 min-vh-100">
        <div className='NominasiPeeji'>
        <Nominasi23 />

        <NominasiPrince23 />  
        <NominasiPrincess23 />
        <NominasiPanutan23 />
        <NominasiEvent23 />
        <NominasiBestEO23 />
        <NominasiWibuPalingEvent23 />
        <NominasiBestIdol23 />
        <NominasiIdolGumush23/>
        <NominasiMC23 />
        <NominasiBand23 />
        <NominasiSpotPalingWibu23 />
        <NominasiGS23 />
        <NominasiKomunitas23 />
        </div>
      </header>
    </div>
  )
}

export default NominasiPage23;
