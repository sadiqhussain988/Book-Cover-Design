import React from "react";
import { motion } from "framer-motion";
import Herosection from "../components/home/HeroSection";
// import { Mail, BookOpen, Heart } from "lucide-react";
import AboutBook from "../components/home/AboutBook";
import AboutAuthor from "../components/home/AboutAuthor";
import FeatureSection from "../components/home/FeatureSection";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import BuySection from "../components/home/BuySection";
import BookBenefits from "../components/home/BookBenefits"
import WhoShouldRead from "../components/home/WhoShouldRead";

const Home = () => {
  return (
    <div className=" mt-20 font-sans bg-[#f9f6f2] text-gray-800">
      <Herosection/>
      
      <AboutBook/>
      <FeatureSection/>
      <BookBenefits/>
      <WhoShouldRead/>
      <AboutAuthor/>
      <Testimonials/>
      <BuySection/>
       <Newsletter/>
    </div>
  );
};

export default Home;