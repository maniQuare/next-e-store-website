"use client";
import React from "react";
import AOS from "aos";


import HeroSections from "@/components/HeroSections";
import OurProducts from "@/components/OurProducts";
import RecentlyAdded from "@/components/RecentlyAdded";
import Banner from "@/components/Banner";
import NotifiedPoducts from "@/components/NotifiedProducts";
import MoreDetails from "@/components/MoreDetails";


export default function Home() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="max-w-auto mx-2">
      <HeroSections/>
      <OurProducts/>
      <RecentlyAdded/>
      <Banner/>
      <NotifiedPoducts/>
      <MoreDetails/>
    </div>
  );
}
