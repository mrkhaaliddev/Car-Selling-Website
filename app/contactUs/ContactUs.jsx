import React from "react";
import GetInTouch from "./GetInTouch";
import Details from "./Details";
import GoogleMap from "./GoogleMap";

const ContactUs = () => {
  return (
    <>
      <GoogleMap />
      <div className="flex justify-center w-full space-x-24">
        <div className="w-[60%]">
          <GetInTouch />
        </div>
        <div className="w-[50%]">
          <Details />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
