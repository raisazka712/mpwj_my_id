import React from "react";
import { Container, Row} from "react-bootstrap";
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

import Echa_Scarlett from "../assets/DUA_EMPAT/NOMINASI/BOUNTY_HUNTER/Echa_Scarlett.png";
import Fadli from "../assets/DUA_EMPAT/NOMINASI/BOUNTY_HUNTER/fadli.png";
import Gallent from "../assets/DUA_EMPAT/NOMINASI/BOUNTY_HUNTER/Gallent.png"; 
import Gepan from "../assets/DUA_EMPAT/NOMINASI/BOUNTY_HUNTER/Gepan.png";
import Nguyen from "../assets/DUA_EMPAT/NOMINASI/BOUNTY_HUNTER/Nguyen.png";
import Sisil from "../assets/DUA_EMPAT/NOMINASI/BOUNTY_HUNTER/Sisil.png";
import Wataru from "../assets/DUA_EMPAT/NOMINASI/BOUNTY_HUNTER/Wataru.png";
import Wealbird from "../assets/DUA_EMPAT/NOMINASI/BOUNTY_HUNTER/Wealbird.png";
import Yoshika from "../assets/DUA_EMPAT/NOMINASI/BOUNTY_HUNTER/Yoshika.png";

function NominasiBountyHunter24() {
    return (
        <div className="nominasi-container">
            <Container>
            <Row>
                <div className="judul">
                    <div className="text-wrapper">
                        <div className="text">
                            NOMINASI BOUNTY HUNTER 2024
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="carousel-nominasi-container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    // scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={Wataru} alt="Wataru" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={Echa_Scarlett} alt="Echa_Scarlett" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={Fadli} alt="Fadli" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={Gallent} alt="Gallent" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={Gepan} alt="Gepan" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={Nguyen} alt="Nguyen" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={Sisil} alt="Sisil" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={Wealbird} alt="Wealbird" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='carousel-nominasi-isi'>
                                <div className="carousel-nominasi-box">
                                    <div className="nom1">
                                        <div className="img-container">
                                            <img src={Yoshika} alt="Yoshika" className="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Row>
            </Container>
        </div>
    )
}

export default NominasiBountyHunter24;