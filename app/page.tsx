import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

const beautyImages = {
  serum: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
  makeup: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85",
  skincare: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=700&q=85",
  perfume: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=85",
  beauty: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=85",
  lotion: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=85",
};

const product = (id: number, title: string, srcUrl: string, price: number, rating = 4.8, discount = 0): Product => ({
  id,
  title,
  srcUrl,
  gallery: [srcUrl, beautyImages.skincare, beautyImages.makeup],
  price,
  discount: { amount: 0, percentage: discount },
  rating,
});

export const newArrivalsData: Product[] = [
  product(1, "Rose Glow Hydrating Serum", beautyImages.serum, 28, 4.8),
  product(2, "Soft Matte Lip Collection", beautyImages.makeup, 22, 4.7),
  product(3, "Daily Dew Moisturizer", beautyImages.skincare, 32, 4.9),
  product(4, "Petal Bloom Eau de Parfum", beautyImages.perfume, 45, 4.8),
];

export const topSellingData: Product[] = [
  product(5, "Radiance Renewal Cream", beautyImages.lotion, 36, 5, 15),
  product(6, "Everyday Beauty Palette", beautyImages.makeup, 26, 4.7),
  product(7, "Nourishing Hair Ritual", beautyImages.beauty, 24, 4.8),
  product(8, "Silk Touch Body Lotion", beautyImages.serum, 19, 4.6, 10),
];

export const relatedProductData: Product[] = [
  product(12, "Golden Hour Face Oil", beautyImages.skincare, 34, 4.8, 20),
  product(13, "Velvet Rose Lip Color", beautyImages.makeup, 18, 4.7),
  product(14, "Blush Petals Fragrance", beautyImages.perfume, 42, 4.9),
  product(15, "Soft Silk Hair Serum", beautyImages.beauty, 21, 4.6, 15),
];

export const reviewsData: Review[] = [
  { id: 1, user: "Ama K.", content: "My skincare routine feels like a little luxury now. The products look beautiful and leave my skin feeling so soft.", rating: 5, date: "September 12, 2026" },
  { id: 2, user: "Sarah M.", content: "The packaging is gorgeous, delivery was smooth, and my new everyday lip colour is perfect. I'll definitely shop again.", rating: 5, date: "September 18, 2026" },
  { id: 3, user: "Nana A.", content: "I love that I can find skincare, fragrance and makeup in one place. The whole experience feels thoughtful and premium.", rating: 5, date: "September 21, 2026" },
  { id: 4, user: "Efua D.", content: "The body lotion smells amazing and keeps my skin moisturised. Lady Porsh has quickly become a favourite.", rating: 5, date: "September 25, 2026" },
  { id: 5, user: "Mimi B.", content: "Beautiful products and such a lovely shopping experience. Everything feels carefully selected.", rating: 5, date: "October 2, 2026" },
  { id: 6, user: "Abena T.", content: "Found a fragrance that feels like me. I appreciate the elegant presentation and easy shopping experience.", rating: 5, date: "October 5, 2026" },
];

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-12 space-y-12 sm:my-16 sm:space-y-16">
        <section id="new-arrivals" className="px-4 xl:px-0">
          <ProductListSec title="New beauty arrivals" data={newArrivalsData} viewAllLink="/shop#new-arrivals" />
        </section>
        <div className="mx-auto max-w-frame px-4"><hr className="border-[#ecd7de]" /></div>
        <section id="top-selling" className="px-4 xl:px-0">
          <ProductListSec title="Loved by beauty lovers" data={topSellingData} viewAllLink="/shop#top-selling" />
        </section>
        <div id="our-story" className="mx-4 rounded-3xl border border-[#efd9e1] bg-gradient-to-r from-[#fff0f4] via-[#fffaf8] to-[#f8e9ed] px-6 py-8 text-center sm:mx-auto sm:max-w-frame sm:px-12 sm:py-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#c54b79]">The Lady Porsh feeling</p>
          <h2 className="beauty-display text-3xl text-[#30252b] sm:text-4xl">Your beauty. Your ritual. Your moment.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#79676f] sm:text-base">From everyday skincare to the finishing touch of fragrance, discover beauty essentials chosen to make caring for yourself feel special.</p>
        </div>
        <section className="mb-12 px-4 xl:px-0">
          <DressStyle />
        </section>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
