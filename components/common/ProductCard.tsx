"use client";

import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";
import { addToCart, removeCartItem } from "@/lib/features/carts/cartsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";

type ProductCardProps = { data: Product };

const ProductCard = ({ data }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state: RootState) => state.carts.cart?.items ?? []);
  const cartItem = items.find((item) => item.id === data.id && item.attributes.length === 2 && item.attributes.every((attribute) => attribute === ""));
  const quantity = cartItem?.quantity ?? 0;
  const price = data.discount.percentage > 0
    ? Math.round(data.price - (data.price * data.discount.percentage) / 100)
    : data.discount.amount > 0 ? Math.round(data.price - data.discount.amount) : data.price;

  const increment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addToCart({
      id: data.id, name: data.title, srcUrl: data.srcUrl, price: data.price,
      attributes: ["", ""], discount: data.discount, quantity: 1,
    }));
  };
  const decrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (quantity > 0) dispatch(removeCartItem({ id: data.id, attributes: ["", ""] }));
  };

  return (
    <article className="flex min-w-0 flex-col items-start">
      <Link href={`/shop/product/${data.id}/${data.title.trim().replace(/\\s+/g, "-").toLowerCase()}`} className="group block w-full">
        <div className="mb-2.5 aspect-square w-full overflow-hidden rounded-[13px] border border-[#f0dce3] bg-[#f9e9ed] lg:mb-4 lg:rounded-[20px]">
          <Image src={data.srcUrl} unoptimized width={295} height={298} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" alt={data.title} />
        </div>
        <strong className="line-clamp-2 text-[#30252b] xl:text-xl">{data.title}</strong>
        <div className="mb-1 flex items-end xl:mb-2">
          <Rating initialValue={data.rating} allowFraction SVGclassName="inline-block" emptyClassName="fill-gray-50" size={19} readonly />
          <span className="ml-[11px] pb-0.5 text-xs text-[#30252b] xl:ml-[13px] xl:text-sm">{data.rating.toFixed(1)}<span className="text-[#806d75]">/5</span></span>
        </div>
      </Link>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-xl font-bold text-[#30252b] xl:text-2xl">GH₵{price}</span>
        {(data.discount.percentage > 0 || data.discount.amount > 0) && <span className="text-sm text-[#9b858e] line-through">GH₵{data.price}</span>}
        {data.discount.percentage > 0 && <span className="rounded-full bg-[#c83f76]/10 px-2.5 py-1 text-xs font-medium text-[#b83269]">-{data.discount.percentage}%</span>}
      </div>
      {quantity === 0 ? (
        <button type="button" onClick={increment} className="w-full rounded-full border border-[#c83f76] bg-[#c83f76] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a92e60]">Add to Cart</button>
      ) : (
        <div className="flex w-full items-center justify-between rounded-full border border-[#ecd7de] bg-[#fff4f6] px-3 py-1.5 text-[#30252b]" aria-label={`${data.title} quantity in cart`}>
          <button type="button" onClick={decrement} aria-label={`Remove one ${data.title}`} className="grid h-8 w-8 place-items-center rounded-full hover:bg-[#f4dce4]">−</button>
          <span className="min-w-6 text-center text-sm font-semibold" aria-live="polite">{quantity}</span>
          <button type="button" onClick={increment} aria-label={`Add one ${data.title}`} className="grid h-8 w-8 place-items-center rounded-full hover:bg-[#f4dce4]">+</button>
        </div>
      )}
    </article>
  );
};

export default ProductCard;
