'use client';

import FeatureSection from "./components/templates/featured";
import HeroSection from "./components/templates/hero";
import MockupSection from "./components/templates/mockups";
import OrderCTASection from "./components/templates/order";
import ProductSection from "./components/templates/products";
import ProductListSection from "./components/templates/productsList";

export default function Home() {

  return (
    <main className="relative min-h-screen w-full flex flex-col font-sans px-8">

    <ProductSection/>

    <HeroSection/>

    <MockupSection/>

    <ProductListSection/>

    <OrderCTASection/>

    <FeatureSection/>
     
    </main>
  );
}
