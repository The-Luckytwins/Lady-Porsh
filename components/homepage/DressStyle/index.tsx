import React from "react";
import * as motion from "framer-motion/client";
import DressStyleCard from "./DressStyleCard";

const categories = [
  { title: "Skincare", subtitle: "Care for your natural glow", url: "/shop#skincare", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85" },
  { title: "Makeup", subtitle: "Your look, your rules", url: "/shop#makeup", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85" },
  { title: "Hair Care", subtitle: "Love every strand", url: "/shop#hair-care", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85" },
  { title: "Fragrance", subtitle: "Leave a lovely impression", url: "/shop#fragrance", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85" },
];

const DressStyle = () => (
  <section className="beauty-categories mx-auto max-w-frame rounded-[30px] px-5 py-10 sm:px-8 md:rounded-[40px] md:px-12 md:py-14">
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8 text-center md:mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#c54b79]">Shop by category</p>
      <h2 className="beauty-display text-3xl leading-tight text-[#2e252a] sm:text-4xl md:text-5xl">Find your perfect <span className="text-[#c83f76]">beauty essential</span></h2>
    </motion.div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {categories.map((category) => <DressStyleCard key={category.title} title={category.title} url={category.url} className="beauty-category-card" image={category.image} subtitle={category.subtitle} />)}
    </div>
  </section>
);

export default DressStyle;
