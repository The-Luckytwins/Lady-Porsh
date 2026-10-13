import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import { PaymentBadge, SocialNetworks } from "./footer.types";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import LinksSection from "./LinksSection";
import Image from "next/image";
import NewsLetterSection from "./NewsLetterSection";
import LayoutSpacing from "./LayoutSpacing";

const socialsData: SocialNetworks[] = [
  { id: 1, icon: <FaInstagram />, url: "https://instagram.com" },
  { id: 2, icon: <FaFacebookF />, url: "https://facebook.com" },
  { id: 3, icon: <FaTwitter />, url: "https://twitter.com" },
];
const paymentBadgesData: PaymentBadge[] = [
  { id: 1, srcUrl: "/icons/Visa.svg" },
  { id: 2, srcUrl: "/icons/mastercard.svg" },
  { id: 3, srcUrl: "/icons/paypal.svg" },
  { id: 4, srcUrl: "/icons/applePay.svg" },
  { id: 5, srcUrl: "/icons/googlePay.svg" },
];

const Footer = () => (
  <footer className="beauty-footer mt-14">
    <div className="relative">
      <div className="absolute bottom-0 h-1/2 w-full bg-[#fff3f5]" />
      <div className="relative px-4"><NewsLetterSection /></div>
    </div>
    <div className="bg-[#fff3f5] px-4 pb-5 pt-10 md:pt-12">
      <div className="mx-auto max-w-frame">
        <nav className="mb-8 grid gap-8 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-4 lg:max-w-[300px]">
            <Link href="/" className="beauty-display text-3xl text-[#c83f76]">Lady Porsh</Link>
            <span className="mb-5 mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#bd466f]">Cosmetics</span>
            <p className="mb-7 text-sm leading-6 text-[#79676f]">Beauty rituals, thoughtful essentials, and little moments of self-care — made to help you feel like yourself, beautifully.</p>
            <div className="flex items-center">{socialsData.map((social) => <Link href={social.url} key={social.id} aria-label="Visit our social profile" className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#e9c6d1] bg-white text-[#b83e70] transition hover:bg-[#c83f76] hover:text-white">{social.icon}</Link>)}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-8"><LinksSection /></div>
        </nav>
        <hr className="mb-5 border-[#e8cbd4]" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs text-[#806d75] sm:text-left">© {new Date().getFullYear()} Lady Porsh Cosmetics. Designed and developed by <Link href="https://github.com/DubemUmeh" className="font-semibold text-[#b83e70] underline-offset-4 hover:underline">Dubem Umeh</Link>.</p>
          <div className="flex items-center">{paymentBadgesData.map((badge, _, arr) => <span key={badge.id} className={cn([arr.length !== badge.id && "mr-2", "flex h-[30px] w-[46px] items-center justify-center rounded-md border border-[#ead5dc] bg-white"])}><Image priority src={badge.srcUrl} width={33} height={15} alt="Payment method" className="max-h-[15px]" /></span>)}</div>
        </div>
      </div>
      <LayoutSpacing />
    </div>
  </footer>
);

export default Footer;
