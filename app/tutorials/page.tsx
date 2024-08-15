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
        observer
        shortSwipes={false}
        modules={[Navigation, Pagination]}
      >
        {modelSwiper.map(({ id, title }, index, array) => (
          <SwiperSlide key={id}>
            <div className="p-12">
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
              <Button
                label="Continue"
                type="ghost"
                onClick={slideNext}
                className="mt-auto"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
