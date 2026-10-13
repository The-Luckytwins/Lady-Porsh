import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuListData } from "../navbar.types";

export type MenuListProps = {
  data: MenuListData;
  label: string;
};

export function MenuList({ data, label }: MenuListProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="rounded-full px-4 font-medium text-[#30252b] hover:bg-[#f8e9ed] data-[state=open]:bg-[#f8e9ed]">
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="overflow-hidden rounded-2xl border border-[#ecd7de] bg-[#fffaf8] shadow-[0_18px_50px_rgba(90,40,60,0.16)]">
        <ul className="grid w-[400px] gap-2 bg-[#fffaf8] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {data.map((item) => (
            <ListItem key={item.id} title={item.label} href={item.url ?? "/shop"}>
              {item.description ?? ""}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-[#f8e9ed] focus:bg-[#f8e9ed]",
          className
        )}
        {...props}
      >
        <div className="text-sm font-semibold leading-none text-[#392b31]">{title}</div>
        <p className="mt-2 line-clamp-2 text-sm leading-snug text-[#806d75]">{children}</p>
      </Link>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";
