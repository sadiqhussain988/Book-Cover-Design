import React from "react";
import { motion } from "framer-motion";
import { Mail, BookOpen, Heart } from "lucide-react";
import Herosection from "../componets/home/HeroSection";
import AboutBook from "../componets/home/AboutBook";
import AboutAuthor from "../componets/home/AboutAuthor";
import BookPreview from "../componets/home/BookPreview";
import Testimonials from "../componets/home/Testimonials";
import Newsletter from "../componets/home/NewSletter";
import BuySection from "../componets/home/BuySection";

const Home = () => {
  return (
    <div className="font-sans bg-[#f9f6f2] text-gray-800">
      <Herosection/>
      <AboutBook/>
      <AboutAuthor/>
      <BookPreview/>
      <Testimonials/>
      <Newsletter/>
      <BuySection/>
    </div>
  );
};

export default Home;