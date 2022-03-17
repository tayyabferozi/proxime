import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "../../../components/Section/Section";
import TextCard from "./TextCard/TextCard";

const Featured = () => {
  return (
    <Section id="featured">
      <div className="sub-section">
        <div className="text-center">
          <h2>Featured Icons</h2>

          <p className="section-sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>

        <div className="slider-wrap">
          <Swiper
            loop={true}
            spaceBetween={20}
            pagination={true}
            slidesPerView={8}
          >
            {[
              {
                id: "featured-icon-1",
                img: "./assets/imgs/featured-icons-1.png",
                name: "Lorem Ipsum",
              },
              {
                id: "featured-icon-2",
                img: "./assets/imgs/featured-icons-2.png",
                name: "Lorem Ipsum",
              },
              {
                id: "featured-icon-3",
                img: "./assets/imgs/featured-icons-3.png",
                name: "Lorem Ipsum",
              },
              {
                id: "featured-icon-4",
                img: "./assets/imgs/featured-icons-4.png",
                name: "Lorem Ipsum",
              },
              {
                id: "featured-icon-5",
                img: "./assets/imgs/featured-icons-5.png",
                name: "Lorem Ipsum",
              },
              {
                id: "featured-icon-6",
                img: "./assets/imgs/featured-icons-6.png",
                name: "Lorem Ipsum",
              },
              {
                id: "featured-icon-7",
                img: "./assets/imgs/featured-icons-7.png",
                name: "Lorem Ipsum",
              },
              {
                id: "featured-icon-8",
                img: "./assets/imgs/featured-icons-8.png",
                name: "Lorem Ipsum",
              },
            ].map((el, idx) => {
              return (
                <SwiperSlide key={el.id}>
                  <div className="icon-card">
                    <img src={el.img} alt={el.name} />
                    <p className="text-center">{el.name}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="d-flex">
          <div className="btn btn-gradient">Explore More</div>
        </div>
      </div>

      <div className="sub-section mt-5">
        <div className="text-center">
          <h2>Featured Edition</h2>

          <p className="section-sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>

        <div className="slider-wrap">
          <Swiper
            className="text-swiper"
            spaceBetween={24}
            navigation={true}
            slidesPerView={3}
          >
            {[
              {
                id: "edition-1",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
              {
                id: "edition-2",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
              {
                id: "edition-3",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
              {
                id: "edition-4",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
              {
                id: "edition-5",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
              {
                id: "edition-6",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
            ].map((el, idx) => {
              return (
                <SwiperSlide key={el.id}>
                  <TextCard {...el} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="d-flex">
          <div className="btn btn-gradient">Explore More</div>
        </div>
      </div>

      <div className="sub-section mt-5">
        <div className="text-center">
          <h2>Featured Icons</h2>

          <p className="section-sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>

        <div className="slider-wrap">
          <Swiper
            className="text-swiper"
            spaceBetween={24}
            navigation={true}
            slidesPerView={3}
          >
            {[
              {
                id: "edition-7",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
              {
                id: "edition-8",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
              {
                id: "edition-9",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
              {
                id: "edition-10",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
              {
                id: "edition-11",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
              {
                id: "edition-12",
                img: "./assets/imgs/featured-edition-1.png",
                title: "Lorem Ipsum Dolor",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
                price: "600.00",
                available: "124/2000",
              },
            ].map((el, idx) => {
              return (
                <SwiperSlide key={el.id}>
                  <TextCard {...el} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="d-flex">
          <div className="btn btn-gradient">Explore More</div>
        </div>
      </div>
    </Section>
  );
};

export default Featured;
