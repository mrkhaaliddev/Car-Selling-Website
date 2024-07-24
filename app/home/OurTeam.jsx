import React from "react";
import Man3 from "../../public/Man3.jpg";
import Khaalid from "../../public/OurTeam/Khaalid.png";
import Lahube from "../../public/OurTeam/Lahube.jpg";
import Abdinour from "../../public/OurTeam/Abdinour.jpg";
import Abdiwali from "../../public/OurTeam/Abdiwali.jpg";
import Libaan from "../../public/OurTeam/Libaan.jpg";
import Afrah from "../../public/OurTeam/Afrah.jpg";
import Maria from "../../public/OurTeam/Maria.jpg";
import Xudeefi from "../../public/OurTeam/Xudeefi.jpg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Team Data
const teamData = [
  {
    name: "Abdinour",
    position: "Software Developer",
    image: Abdinour,
    email: "Abdinour12@gmail.com",
    phone: "+30 595 59 456",
  },
  {
    name: "Lahube",
    position: "Software Developer",
    image: Lahube,
    email: "lahube@gmail.com",
    phone: "+30 595 59 123",
  },
  {
    name: "Mr Khaalid",
    position: "Development Manager",
    image: Khaalid,
    email: "khaalidyare344@gmail.com",
    phone: "+252 611008043",
  },
  {
    name: "Maria",
    position: "Software Developer",
    image: Maria,
    email: "Maria@gmail.com",
    phone: "+30 595 59 456",
  },
  {
    name: "Abdiwali",
    position: "UI/UX Designer",
    image: Abdiwali,
    email: "Abdiwali@gmail.com",
    phone: "+30 595 59 456",
  },
  {
    name: "Libaan",
    position: "UI/UX Designer",
    image: Libaan,
    email: "Libaan@gmail.com",
    phone: "+30 595 59 456",
  },
  {
    name: "Afrah",
    position: "UI/UX Designer",
    image: Afrah,
    email: "Afrah@gmail.com",
    phone: "+30 595 59 456",
  },
  {
    name: "Xudeefi",
    position: "Software Developer",
    image: Xudeefi,
    email: "Xudeefi@gmail.com",
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
                height={700}
                className="mx-auto rounded-lg object-cover w-[300px] h-[400px]"
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
