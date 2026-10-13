import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const categoriesData = [
  { title: "Skincare", slug: "/shop?category=skincare" },
  { title: "Makeup", slug: "/shop?category=makeup" },
  { title: "Hair care", slug: "/shop?category=hair-care" },
  { title: "Fragrance", slug: "/shop?category=fragrance" },
  { title: "Body care", slug: "/shop?category=body-care" },
];

const CategoriesSection = () => (
  <div className="flex flex-col space-y-0.5 text-[#806d75]">
    {categoriesData.map((category) => <Link key={category.title} href={category.slug} className="flex items-center justify-between py-2 transition hover:text-[#c83f76]">{category.title}<MdKeyboardArrowRight /></Link>)}
  </div>
);

export default CategoriesSection;
