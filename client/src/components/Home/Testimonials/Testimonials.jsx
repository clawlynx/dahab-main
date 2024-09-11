import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Michael Johnson",
    review:
      "The repair service at DAHAB Miners is outstanding. They quickly diagnosed and fixed my ASIC miner, minimizing downtime and getting me back to mining efficiently.",
  },
  {
    name: "Emily Chen",
    review:
      "Hosting my miners with DAHAB Miners has been a game-changer. Their facilities are secure and well-maintained, ensuring my equipment runs smoothly without any issues.",
  },
  {
    name: "David Miller",
    review:
      "I've been impressed with DAHAB Miner's commitment to quality and customer service. From purchasing ASIC miners to receiving support, they've exceeded my expectations.",
  },
  {
    name: "Sophia Lee",
    review:
      "DAHAB Miners provides excellent and cost-effective hosting solutions for mining equipment, allowing me to maximize my profitability.",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="px-5 md:px-10 lg:px-[120px] py-10">
      <h4 className="text-base font-semibold text-btnGreen text-center">
        Testimonials
      </h4>
      <h1 className="text-[40px] font-semibold gradient-heading text-center">
        What our customers say about us
      </h1>
      <Slider {...settings} className="my-10">
        {testimonials.map((x, index) => (
          <div key={index} className="px-2">
            <TestimonialCard name={x.name} content={x.review} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
