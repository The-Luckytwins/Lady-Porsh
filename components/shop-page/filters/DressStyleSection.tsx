import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const beautyTypes = [
  { title: "Daily essentials", slug: "/shop?routine=daily" },
  { title: "Self-care treats", slug: "/shop?routine=self-care" },
  { title: "Gifts & sets", slug: "/shop?type=gift-sets" },
  { title: "Travel sizes", slug: "/shop?size=travel" },
];

const DressStyleSection = () => (
  <Accordion type="single" collapsible defaultValue="filter-style">
    <AccordionItem value="filter-style" className="border-none">
      <AccordionTrigger className="p-0 py-0.5 text-xl font-bold text-[#392b31] hover:no-underline">Shop by routine</AccordionTrigger>
      <AccordionContent className="pb-0 pt-4">
        <div className="flex flex-col space-y-0.5 text-[#806d75]">
          {beautyTypes.map((item) => <Link key={item.title} href={item.slug} className="flex items-center justify-between py-2 transition hover:text-[#c83f76]">{item.title}<MdKeyboardArrowRight /></Link>)}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default DressStyleSection;
