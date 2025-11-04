import React from "react";
import { motion } from "framer-motion";
import { Mail, BookOpen, Heart } from "lucide-react";
import Herosection from "../componets/home/HeroSection";
import AboutBook from "../componets/home/AboutBook";
import AboutAuthor from "../componets/home/AboutAuthor";
import Testimonials from "../componets/home/Testimonials";
import Newsletter from "../componets/Home/Newsletter";
import BuySection from "../componets/home/BuySection";
import FeatureSection from "../componets/home/FeatureSection";

const Home = () => {
  return (
    <div className=" mt-20 font-sans bg-[#f9f6f2] text-gray-800">
      <Herosection/>
      <AboutBook/>
      <AboutAuthor/>
      <FeatureSection/>
      <Testimonials/>
      <Newsletter/>
      <BuySection/>
    </div>
  );
};

export default Home;