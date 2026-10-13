import Link from "next/link";
import React from "react";

const TopBanner = () => (
  <div className="beauty-announcement px-3 py-2 text-center text-xs sm:text-sm">
    <p>
      ✨ Glow confidently · Authentic beauty essentials · Fast delivery across Ghana ✨
      <Link href="/shop" className="ml-2 font-semibold underline underline-offset-4">Discover your glow</Link>
    </p>
  </div>
);

export default TopBanner;
