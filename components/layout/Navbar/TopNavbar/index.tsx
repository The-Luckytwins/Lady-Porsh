import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

const data: NavMenu = [
  { id: 1, label: "Shop", type: "MenuList", children: [
    { id: 11, label: "Skincare", url: "/shop#skincare", description: "Daily care for healthy, glowing skin" },
    { id: 12, label: "Makeup", url: "/shop#makeup", description: "Beauty essentials for every look" },
    { id: 13, label: "Hair care", url: "/shop#hair-care", description: "Nourish and care for your hair" },
    { id: 14, label: "Fragrance", url: "/shop#fragrance", description: "Find your signature scent" },
  ]},
  { id: 2, type: "MenuItem", label: "On Sale", url: "/shop#on-sale", children: [] },
  { id: 3, type: "MenuItem", label: "New Arrivals", url: "/shop#new-arrivals", children: [] },
  { id: 4, type: "MenuItem", label: "Our Story", url: "/#our-story", children: [] },
];

const TopNavbar = () => (
  <nav className="beauty-nav sticky top-0 z-20">
    <div className="relative mx-auto flex max-w-frame items-center justify-between gap-3 px-4 py-4 sm:py-5 xl:px-0">
      <div className="flex shrink-0 items-center">
        <div className="mr-3 block md:hidden"><ResTopNavbar data={data} /></div>
        <Link href="/" aria-label="Lady Porsh Cosmetics home" className="beauty-logo flex flex-col leading-none">
          <span className="beauty-display text-[27px] sm:text-[32px]">Lady Porsh</span>
          <span className="mt-1 text-center text-[9px] font-semibold uppercase tracking-[0.34em] text-[#bd466f]">Cosmetics</span>
        </Link>
      </div>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {data.map((item) => <React.Fragment key={item.id}>
            {item.type === "MenuItem" && <MenuItem label={item.label} url={item.url} />}
            {item.type === "MenuList" && <MenuList data={item.children} label={item.label} />}
          </React.Fragment>)}
        </NavigationMenuList>
      </NavigationMenu>
      <InputGroup className="hidden min-w-0 max-w-[430px] flex-1 rounded-full bg-[#f8e9ed] md:flex">
        <InputGroup.Text><Image priority src="/icons/search.svg" height={20} width={20} alt="Search" className="min-w-5 min-h-5" /></InputGroup.Text>
        <InputGroup.Input type="search" name="search" placeholder="Search beauty, skincare and more..." className="bg-transparent placeholder:text-[#8c7a81]" />
      </InputGroup>
      <div className="flex shrink-0 items-center">
        <Link href="/search" className="mr-2 block p-1 md:hidden" aria-label="Search"><Image priority src="/icons/search-black.svg" height={22} width={22} alt="" /></Link>
        <CartBtn />
        <Link href="/#signin" className="p-1" aria-label="Your account"><Image priority src="/icons/user.svg" height={22} width={22} alt="" /></Link>
      </div>
    </div>
  </nav>
);

export default TopNavbar;
