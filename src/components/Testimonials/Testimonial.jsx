import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/Airtel-logo.png";
import profilePic2 from "../../img/React-js-removebg-preview.png";
import profilePic3 from "../../img/Spring_Boot-removebg-preview.png";
import profilePic4 from "../../img/js-logo-removebg-preview.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "During my internship, I designed a user-friendly UI that facilitated data analysis. This UI allowed us to input an ID to retrieve corresponding data, upload CSV files for batch data retrieval, and present the results in a downloadable CSV format..",
    },
    {
      img: profilePic2,
      review:
        "React.js, commonly known as React, is an open-source JavaScript library developed by Facebook. It is widely used for building user interfaces for web and mobile applications, known for its component-based architecture, virtual DOM, and efficient rendering, making it a popular choice among developers for building interactive and responsive UIs.",
    },
    {
      img: profilePic3,
      review:
        "Spring Boot is an open-source framework within the larger Spring ecosystem that simplifies the development of Java applications by providing production-ready templates and auto-configuration. It's designed to streamline the process of building robust, stand-alone, and microservices-based applications with minimal setup and boilerplate code.",
    },
    {
      img: profilePic4,
      review:
        "JavaScript is a widely-used, versatile programming language primarily used for web development, enabling interactive and dynamic behavior in web applications.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>My Intership </span>
        <span>Experience Work </span>
        <span>Learning for me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
