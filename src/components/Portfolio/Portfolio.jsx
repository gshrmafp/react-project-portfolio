import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Complain_Box from "../../img/compalin-box.png";
import Ecommerce from "../../img/e-commerce.png";
import Portfolio_img from "../../img/my-portfolio.png";
import Twitter from "../../img/twitter_clone.jpg";
import Food_Order from "../../img/food-order.png";
import Airtel_project from "../../img/Airtel Project.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span></span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
          <SwiperSlide>
          <img src={Portfolio_img} alt="" />
          <h3>PortFolio</h3>
        </SwiperSlide>
          <SwiperSlide>
          <img src={Twitter} alt="" />
          <h3>Twitter Clone</h3>
        </SwiperSlide>
          <SwiperSlide>
          <img src={Airtel_project} alt="" />
          <h3>Airtel Project</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Complain_Box} alt="" />
          <h3>Compalin Box</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <h3>E-Commerce Webpage</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Food_Order} alt="" />
          <h3>Food Order Webpage</h3>
        </SwiperSlide>
    
      </Swiper>
    </div>
  );
};

export default Portfolio;
