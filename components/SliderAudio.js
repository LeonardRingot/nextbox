import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Style from "../styles/SlideAudio.module.css";
import AudioPlayer from "./AudioPlayer";
import Image from "next/image";

export default function SliderAudio() {
  const fetchAllMusics = async () => {
    const res = await fetch("api/music");
    const allMusics = await res.json();
    setAllMusics(allMusics);
    console.log(allMusics);
  };

  useEffect(() => {
    fetchAllMusics();
  }, []);

  const [allMusics, setAllMusics] = useState([]);
  const [currentMusic, setCurrentMusic] = useState({});

  const selectMusic = (e) => {
    const index = Number(e.currentTarget.dataset.id);
    //console.log(allMusics[index].src);
    setCurrentMusic(allMusics[index]);
  };

  function afficheCurrent(current) {
    console.log(current);
    return typeof current == "string" ? current : "";
  }

  function afficheCurrentImage(current) {
    console.log(current);
    return typeof current == "string" ? current : "/ ";
  }

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        className="mySwiper"
        modules={[Pagination]}
        >
        {allMusics.map((music, index) => (
          <SwiperSlide key={index}>{
              <Image
                src={music.img}
                height={800}
                width={800}
              />
            }
{music.title}
          </SwiperSlide>
        ))}
      </Swiper>
      <AudioPlayer music={currentMusic.src} />
      <p className={Style.right}>
        <b> {afficheCurrent(currentMusic.src)} </b>
      </p>
    </>
  );
}