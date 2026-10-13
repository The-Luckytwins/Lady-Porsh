import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import Image from "next/image";
import React from "react";

const NewsLetterSection = () => (
  <div className="beauty-newsletter relative mx-auto grid max-w-frame grid-cols-1 gap-6 rounded-[26px] px-6 py-8 sm:px-10 md:grid-cols-2 md:items-center md:px-14 md:py-10">
    <div>
      <p className="beauty-display text-3xl leading-tight text-white sm:text-4xl">A little beauty in your inbox.</p>
      <p className="mt-3 max-w-md text-sm leading-6 text-white/80">Get first looks at new arrivals, beauty tips and special offers.</p>
    </div>
    <div className="mx-auto flex w-full max-w-[380px] flex-col">
      <InputGroup className="mb-3 flex rounded-full bg-white">
        <InputGroup.Text><Image priority src="/icons/envelope.svg" height={20} width={20} alt="Email" className="min-w-5 min-h-5" /></InputGroup.Text>
        <InputGroup.Input type="email" name="email" placeholder="Enter your email address" className="bg-transparent placeholder:text-[#9b838c]"/>
      </InputGroup>
      <Button variant="secondary" className="h-12 rounded-full bg-[#fff8f8] text-sm font-semibold text-[#b83e70] hover:bg-white" aria-label="Subscribe to newsletter" type="button">Join the beauty list</Button>
    </div>
  </div>
);

export default NewsLetterSection;
