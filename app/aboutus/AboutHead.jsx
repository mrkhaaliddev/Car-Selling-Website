import React from "react";

const AboutHead = () => {
  return (
    <div className="w-full px-4 py-10 lg:px-40 md:px-20">
      <div className="mb-4">
        <a href="/" className="text-primary">
          Home
        </a>{" "}
        / About Us
      </div>
      <h1 className="mb-4 text-3xl font-bold">About Us</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-4 lg:pt-5">
        <div className="mb-4 text-[34px] font-bold lg:w-1/2">
          <h2 className="w-[80%] leading-normal">
            We Value Our Clients And Want Them To Have A Nice Experience
          </h2>
        </div>
        <div className="text-sm lg:w-1/2">
          <p className="mb-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Convallis integer enim eget
            sit urna. Eu duis lectus amet vestibulum varius. Nibh tellus sit sit
            at lorem facilisis. Nunc vulputate ac interdum aliquet vestibulum in
            tellus.
          </p>
          <p className="mb-4 text-gray-700">
            Sit convallis rhoncus dolor purus amet orci urna. Lobortis vulputate
            vestibulum consectetur donec ipsum egestas velit laoreet justo. Eu
            dignissim egestas egestas ipsum. Sit est nunc pellentesque at a
            aliquam ultrices consequat. Velit duis velit nec amet eget eu morbi.
            Libero non diam sit viverra dignissim. Aliquam tincidunt in cursus
            euismod enim.
          </p>
          <p className="mb-4 text-gray-700">
            Magna odio sed ornare ultrices. Id lectus mi amet sit at sit arcu mi
            nisl. Mauris egestas arcu mauris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHead;
