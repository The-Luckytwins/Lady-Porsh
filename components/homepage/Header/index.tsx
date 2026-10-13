import Link from "next/link";
import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";

const Header = () => (
  <header className="beauty-hero overflow-hidden">
    <div className="mx-auto grid max-w-frame items-center gap-5 px-5 py-8 sm:px-8 md:min-h-[465px] md:grid-cols-[0.95fr_1.05fr] md:gap-2 md:py-7 lg:px-0">
      <section className="relative z-10 order-2 md:order-1">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#c54b79] sm:text-sm">
          Premium beauty & skincare <span className="h-px w-10 bg-[#dca9b8]" />
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="beauty-display max-w-[650px] text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[72px]">
          Real Beauty <span className="block text-[#c83f76]">Looks Good On You</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-4 max-w-[470px] text-sm leading-6 text-[#6d6267] sm:text-base">
          Discover high-quality skincare, makeup and beauty essentials designed to bring out your natural glow. Because you deserve to feel beautiful — every day.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 flex flex-wrap items-center gap-4">
          <Link href="/shop" className="beauty-button inline-flex min-w-44 items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">Shop Now <span className="ml-3">→</span></Link>
        </motion.div>
        <div className="mt-6 grid max-w-[600px] grid-cols-2 gap-2 text-xs text-[#65565d] sm:grid-cols-4">
          <span className="beauty-benefit">♡ 100% Authentic Products</span>
          <span className="beauty-benefit">♧ Fast & Reliable Delivery</span>
          <span className="beauty-benefit">◇ Secure Payments</span>
          <span className="beauty-benefit">♡ Beauty Support & Advice</span>
        </div>
      </section>
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative order-1 mx-auto min-h-[300px] w-full max-w-[690px] overflow-hidden rounded-[48%_48%_12px_12px] bg-[#f4dce2] md:order-2 md:min-h-[450px]">
        <Image unoptimized priority fill sizes="(max-width: 768px) 100vw, 52vw" src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1400&q=90" alt="Premium skincare products arranged for a beauty ritual" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf8]/25 via-transparent to-[#c83f76]/10" />
        <div className="absolute bottom-4 left-4 max-w-[220px] rounded-2xl border border-white/70 bg-white/85 p-3 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7">
          <span className="block text-[10px] uppercase tracking-[0.2em] text-[#b77b50]">Your daily ritual</span>
          <span className="beauty-display mt-1 block text-xl text-[#33252b]">A little glow, a lot of love.</span>
        </div>
      </motion.div>
    </div>
  </header>
);

export default Header;
