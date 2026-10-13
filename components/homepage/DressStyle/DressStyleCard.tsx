import Link from "next/link";
import React from "react";

type DressStyleCardProps = { title: string; url: string; className?: string; image?: string; subtitle?: string };

const DressStyleCard = ({ title, url, className, image, subtitle }: DressStyleCardProps) => (
  <Link href={url} className={`beauty-category-card group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl p-5 ${className ?? ""}`} style={image ? { backgroundImage: `linear-gradient(90deg, rgba(255,247,247,.97) 0%, rgba(255,247,247,.72) 48%, rgba(255,247,247,.08) 100%), url("${image}")` } : undefined}>
    <span className="relative z-10 max-w-[160px]">
      <span className="beauty-display block text-2xl text-[#32252b]">{title}</span>
      {subtitle && <span className="mt-2 block text-sm leading-5 text-[#715f66]">{subtitle}</span>}
    </span>
    <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-[#c83f76] text-white transition group-hover:translate-x-1">→</span>
  </Link>
);

export default DressStyleCard;
