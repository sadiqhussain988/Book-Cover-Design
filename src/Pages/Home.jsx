import React from "react";
import { motion } from "framer-motion";
import { Mail, BookOpen, Heart } from "lucide-react";
import Herosection from "../components/home/HeroSection";
import AboutBook from "../components/home/AboutBook";
import AboutAuthor from "../components/home/AboutAuthor";
import FeatureSection from "../components/home/FeatureSection";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/Home/Newsletter";
import BuySection from "../components/home/BuySection";

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