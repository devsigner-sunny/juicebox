"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/Button/Index";
import Hexagon from "@/components/Hexagon/Index";
import OpacityText from "../../components/OpacityText";
import React from "react";
import { modelSwiper } from "@/models";
import "./tutorials.css";

const Tutorials: React.FC = () => {
  const { useRef } = React;
  const swiper = useSwiper();
  const swiperRef = useRef<SwiperRef>(null);

  const slideNext = () => swiperRef?.current?.swiper.slideNext();

  return (
    <>
      <Swiper
        ref={swiperRef}
        pagination={{ type: "bullets", clickable: true }}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="__main-min-screen-height"
      >
        {modelSwiper.map(({ title }, index, array) => (
          <SwiperSlide key={index}>
            <div className="px-12 pb-12 pt-[20px]">
              <Hexagon size="medium" bg />
            </div>
            <div className="text-center">
              <OpacityText>{title}</OpacityText>
            </div>
            {index === array.length - 1 ? (
              <Button
                label="Get started"
                type="invert"
                href="/multiform"
                className="mt-auto"
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full py-6 mt-auto text-base leading-none tracking-wide">
                <button className="__btn __btn-ghost" onClick={slideNext}>
                  Continue
                </button>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Tutorials;
