"use client";
import React from "react";
import AOS from "aos";


import HeroSections from "@/components/HeroSections";

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
    <div>
      <HeroSections/>
    </div>
  );
}
