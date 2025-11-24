'use client';

import FeatureSection from "./components/templates/featured";
import HeroSection from "./components/templates/hero";
import ServicesSection from "./components/templates/services";
// import OrderCTASection from "./components/templates/order";
import ProductSection from "./components/templates/products";
import ProductListSection from "./components/templates/productsList";
import HeroPremium from "./components/templates/hero2";

export default function Home() {

  return (
    <main className="relative min-h-screen w-full flex flex-col font-sans px-8">

    <ProductSection/>

    <ProductListSection/>

    <ServicesSection/>

    <HeroSection/>

    <HeroPremium />

    {/* <OrderCTASection/> */}

    <FeatureSection/>
     
    </main>
  );
}
