import React from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product.types";
import Link from "next/link";

type ProductListSecProps = { title: string; data: Product[]; viewAllLink?: string };

const ProductListSec = ({ title, data, viewAllLink }: ProductListSecProps) => (
  <section className="mx-auto max-w-frame text-center">
    <motion.h2 initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      className={cn([integralCF.className, "beauty-display mb-8 text-3xl font-medium capitalize tracking-tight text-[#30252b] sm:text-4xl md:mb-10 md:text-5xl"])}>
      {title}
    </motion.h2>
    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.12, duration: 0.5 }}>
      <Carousel opts={{ align: "start" }} className="mb-6 w-full md:mb-9">
        <CarouselContent className="mx-4 space-x-4 sm:space-x-5 xl:mx-0">
          {data.map((product) => <CarouselItem key={product.id} className="w-full max-w-[198px] pl-0 sm:max-w-[250px] lg:max-w-[275px]"><ProductCard data={product} /></CarouselItem>)}
        </CarouselContent>
      </Carousel>
      {viewAllLink && <div className="w-full px-4 text-center sm:px-0"><Link href={viewAllLink} className="inline-block w-full rounded-full border border-[#e8c7d2] px-10 py-4 text-sm font-semibold text-[#b83e70] transition hover:border-[#c83f76] hover:bg-[#c83f76] hover:text-white sm:w-[218px] sm:text-base">Explore all</Link></div>}
    </motion.div>
  </section>
);

export default ProductListSec;
