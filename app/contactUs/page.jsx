import React from "react";
import ContactHead from "./ContactHead";
import ContactUs from "./ContactUs";

const page = () => {
  return (
    <div className="px-10 lg:px-40 md:px-20">
      <ContactHead />
      <ContactUs />
    </div>
  );
};

export default page;
