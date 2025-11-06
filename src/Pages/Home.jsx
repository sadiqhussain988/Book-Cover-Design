import React from "react";
import { motion } from "framer-motion";
// import { Mail, BookOpen, Heart } from "lucide-react";
import Herosection from "../components/Home/HeroSection";
import AboutBook from "../components/Home/AboutBook";
import AboutAuthor from "../components/Home/AboutAuthor";
import FeatureSection from "../components/Home/FeatureSection";
import Testimonials from "../components/Home/Testimonials";
import Newsletter from "../components/Home/Newsletter";
import BuySection from "../components/Home/BuySection";
import BookBenefits from "../components/Home/BookBenefits"
import WhoShouldRead from "../components/Home/WhoShouldRead";

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