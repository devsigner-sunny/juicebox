"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { LinkButton } from "@/components/Button/LinkButton";
import { Hexagon } from "@/components/Hexagon";
import { OpacityText } from "../../components/OpacityText";
import { modelSwiper } from "@/models";
import { Button } from "@/components/Button/Button";
import "./tutorials.css";

export default function Tutorials() {
  const { useRef } = React;
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
              <LinkButton
                label="Get started"
                type="invert"
                href="/multistepform"
                className="mt-auto"
              />
            ) : (
              <Button label="continue" type="ghost" onClick={slideNext} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
