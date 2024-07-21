import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentlyQs = () => {
  return (
    <div>
      <h1 className="py-10 text-2xl font-bold text-center md:text-3xl lg:text-4xl">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full px-10 pb-16 mx-auto md:w-4/5 lg:w-3/4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Does BoxCar own the cars I see online or are they owned by other.
          </AccordionTrigger>
          <AccordionContent>
            Cras vitae ac nunc orci. Purus amet tortor non at phasellus
            ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
            scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat
            vel.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How do you choose the cars that you sell?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I save my favorite cars to a list I can view later?
          </AccordionTrigger>
          <AccordionContent>
            Cras vitae ac nunc orci. Purus amet tortor non at phasellus
            ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
            scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat
            vel.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Can I be notified when cars I like are added to your inventory?{" "}
          </AccordionTrigger>
          <AccordionContent>
            Cras vitae ac nunc orci. Purus amet tortor non at phasellus
            ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
            scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat
            vel.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            What tools do you have to help me find the right car for me and my
            budget?{" "}
          </AccordionTrigger>
          <AccordionContent>
            Cras vitae ac nunc orci. Purus amet tortor non at phasellus
            ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus,
            scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat
            vel.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FrequentlyQs;
