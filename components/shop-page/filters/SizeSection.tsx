"use client";

import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const skinTypes = ["Dry", "Oily", "Combination", "Sensitive", "Normal"];

const SizeSection = () => {
  const [selected, setSelected] = useState<string>("Normal");

  return (
    <Accordion type="single" collapsible defaultValue="filter-size">
      <AccordionItem value="filter-size" className="border-none">
        <AccordionTrigger className="p-0 py-0.5 text-xl font-bold text-[#392b31] hover:no-underline">Skin type</AccordionTrigger>
        <AccordionContent className="pb-0 pt-4">
          <div className="flex flex-wrap items-center">
            {skinTypes.map((type) => <button key={type} type="button" aria-pressed={selected === type} className={cn("m-1 flex min-h-[39px] items-center justify-center rounded-full border px-4 py-2.5 text-sm transition", selected === type ? "border-[#c83f76] bg-[#c83f76] font-medium text-white" : "border-[#ecd7de] bg-[#fff7f7] text-[#715f66] hover:border-[#c83f76]")} onClick={() => setSelected(type)}>{type}</button>)}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SizeSection;
