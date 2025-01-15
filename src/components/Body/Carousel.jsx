import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Catcard from "./Catcard";
import thumbnailwoman from '../../assets/img/thumbnailwoman.webp';
import thumbnailman from '../../assets/img/thumbnailman.webp';
import thumbnailring from '../../assets/img/thumbnailring.webp';
import thumbnailelectronic from '../../assets/img/thumbnailelectronic.webp';

const Carousel = () => {
    const settings = {
      dots: true,
      arrows:true,
      infinite: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 4, 
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1, 
            // slidesToScroll: 1,
          },
        },
      ],
    };
  
  return (
    <div className="carousel-container min-h-10">
      <Slider {...settings}>
        <Catcard address={thumbnailwoman} name="Women's Clothing" prnumber="6"/>
        <Catcard address={thumbnailman} name="Men's Clothing" prnumber="4"/>
        <Catcard address={thumbnailring} name="Jewelery" prnumber="4"/>
        <Catcard address={thumbnailelectronic} name="Electronics" prnumber="6"/>
      </Slider>
    </div>
  );
};

export default Carousel;