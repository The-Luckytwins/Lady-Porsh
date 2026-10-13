import Link from "next/link";
import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";

const Header = () => (
  <header className="beauty-hero overflow-hidden">
    <div className="mx-auto grid max-w-frame items-center gap-8 px-5 py-12 sm:px-8 md:min-h-[520px] md:grid-cols-[0.95fr_1.05fr] md:gap-5 md:py-12 lg:px-0">
      <section className="relative z-10 order-2 md:order-1">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#c54b79] sm:text-sm">
          Premium beauty & skincare
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="beauty-display max-w-[620px] text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
          Real Beauty <span className="block text-[#c83f76]">Looks Good On You.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-6 max-w-[470px] text-sm leading-7 text-[#6d6267] sm:text-base">
          Discover skincare, makeup and beauty essentials chosen to bring out your natural glow. Because you deserve to feel beautiful — every day.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-7 flex flex-wrap items-center gap-4">
          <Link href="/shop" className="beauty-button inline-flex min-w-44 items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">Shop beauty <span className="ml-3">→</span></Link>
          <Link href="/shop#new-arrivals" className="text-sm font-semibold text-[#5c404b] underline decoration-[#dca9b8] underline-offset-4">Explore new arrivals</Link>
        </motion.div>
        <div className="mt-9 grid max-w-[510px] grid-cols-2 gap-3 text-xs text-[#65565d] sm:grid-cols-3">
          <span className="beauty-benefit">♡ Authentic beauty picks</span>
          <span className="beauty-benefit">✧ Thoughtful self-care</span>
          <span className="beauty-benefit col-span-2 sm:col-span-1">♧ Delivery across Ghana</span>
        </div>
      </section>
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative order-1 mx-auto min-h-[330px] w-full max-w-[640px] overflow-hidden rounded-[42%_42%_18px_18px] bg-[#f4dce2] md:order-2 md:min-h-[480px]">
        <Image unoptimized priority fill sizes="(max-width: 768px) 100vw, 50vw" src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1400&q=90" alt="Elegant skincare products arranged for a beauty ritual" className="object-cover object-center" />
        <div className="absolute bottom-5 left-5 max-w-[220px] rounded-2xl border border-white/70 bg-white/80 p-4 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8">
          <span className="block text-[10px] uppercase tracking-[0.2em] text-[#b77b50]">Your daily ritual</span>
          <span className="beauty-display mt-1 block text-xl text-[#33252b]">A little glow, a lot of love.</span>
        </div>
        <span className="absolute right-5 top-5 grid h-16 w-16 place-items-center rounded-full border border-white/80 bg-[#fff9f5]/85 text-center text-[10px] font-semibold uppercase tracking-widest text-[#b77b50]">Love<br/>your skin</span>
      </motion.div>
    </div>
  </header>
);

export default Header;
