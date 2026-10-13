import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";

const footerLinksData: FooterLinks[] = [
  { id: 1, title: "Explore", children: [
    { id: 11, label: "Shop all", url: "/shop" },
    { id: 12, label: "New arrivals", url: "/shop#new-arrivals" },
    { id: 13, label: "Best sellers", url: "/shop#top-selling" },
    { id: 14, label: "Our story", url: "/#our-story" },
  ]},
  { id: 2, title: "Beauty", children: [
    { id: 21, label: "Skincare", url: "/shop#skincare" },
    { id: 22, label: "Makeup", url: "/shop#makeup" },
    { id: 23, label: "Hair care", url: "/shop#hair-care" },
    { id: 24, label: "Fragrance", url: "/shop#fragrance" },
  ]},
  { id: 3, title: "Customer care", children: [
    { id: 31, label: "Contact us", url: "/contact" },
    { id: 32, label: "Shipping & delivery", url: "/#delivery" },
    { id: 33, label: "FAQs", url: "/#faq" },
    { id: 34, label: "Returns", url: "/#returns" },
  ]},
  { id: 4, title: "Your account", children: [
    { id: 41, label: "My account", url: "/#signin" },
    { id: 42, label: "Shopping bag", url: "/cart" },
    { id: 43, label: "Privacy policy", url: "/privacy-policy" },
    { id: 44, label: "Terms & conditions", url: "/terms" },
  ]},
];

const LinksSection = () => <>{footerLinksData.map((item) => <section className="mt-3 flex flex-col" key={item.id}><h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#392b31] md:text-sm">{item.title}</h3>{item.children.map((link) => <Link href={link.url} key={link.id} className="mb-3 w-fit text-sm text-[#806d75] transition hover:text-[#c83f76]">{link.label}</Link>)}</section>)}</>;

export default LinksSection;
