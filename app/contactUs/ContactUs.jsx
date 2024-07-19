import React from "react";
import GetInTouch from "./GetInTouch";
import Details from "./Details";
import GoogleMap from "./GoogleMap";

const ContactUs = () => {
  return (
    <>
      <GoogleMap />
      <div className="justify-center block w-full lg:space-x-24 lg:flex">
        <div className="w-full lg:w-[60%]">
          <GetInTouch />
        </div>
        <div className="w-full pb-16 lg:w-[50%]">
          <Details />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
