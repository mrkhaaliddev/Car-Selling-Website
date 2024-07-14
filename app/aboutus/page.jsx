import React from "react";
import AboutHead from "./AboutHead";
import GridImages from "./GridImages";
import WhyUs from "../home/WhyUs";
import Count from "../home/Count";
import WhatWeHave from "../home/WhatWeHave";
import FrequentlyQs from "./FrequentlyQs";

const page = () => {
  return (
    <div>
      <AboutHead /> <GridImages />
      <WhyUs />
      <Count />
      <WhatWeHave />
      <FrequentlyQs />
    </div>
  );
};

export default page;
