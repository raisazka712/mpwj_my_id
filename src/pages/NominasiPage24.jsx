import React from 'react'


import Nominasi24 from '../components/Nominasi24';

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



const NominasiPage24 = () => {
  return (
    <div className='nominasiPage'>
        <header className='w-100 min-vh-100'>
            <div className='NominasiPeeji'>
                <Nominasi24 />

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
            </div>
        </header>
      
    </div>
  )
}

export default NominasiPage24
