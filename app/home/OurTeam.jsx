import React from "react";
import Man from "../../public/Man.jpg";
import Man2 from "../../public/Man2.jpg";
import Man3 from "../../public/Man3.jpg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamData = [
  {
    name: "Courtney Henry",
    position: "Development Manager",
    image: Man3,
    email: "arlene@boxcars.com",
    phone: "+30 595 59 456",
  },
  {
    name: "Jerome Bell",
    position: "Software Developer",
    image: Man3,
    email: "bell@boxcars.com",
    phone: "+30 595 59 123",
  },
  {
    name: "Khaalid Abdirahim",
    position: "Software Tester",
    image: Man3,
    email: "khaalidyare344@gmail.com",
    phone: "+252 611008043",
  },
  {
    name: "Arlene McCoy",
    position: "Software Developer",
    image: Man3,
    email: "arlene@boxcars.com",
    phone: "+30 595 59 456",
  },
  {
    name: "Jenny Wilson",
    position: "UI/UX Designer",
    image: Man3,
    email: "arlene@boxcars.com",
    phone: "+30 595 59 456",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Team = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="mb-8 text-4xl font-bold text-center">Our Team</h1>
      <Slider {...settings}>
        {teamData.map((member, index) => (
          <div key={index} className="p-2">
            <div className="relative p-4 bg-none rounded-lg shadow-lg h-[520px] hover-trigger">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={220}
                className="mx-auto rounded-lg"
              />
              <h2 className="mt-4 text-xl font-bold text-center">
                {member.name}
              </h2>
              <p className="text-center text-gray-600">{member.position}</p>
              {member.email && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 bg-gray-900 bg-opacity-75 rounded-lg opacity-0 hover-target hover:opacity-100">
                  <p>{member.email}</p>
                  <p>{member.phone}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
