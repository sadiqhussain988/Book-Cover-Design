// src/pages/PreOrder.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PreOrderHero from "../components/preorder/PreOrderHero";
import PricingSection from "../components/preOrder/PricingSection";
import PreOrderBenefits from "../components/preOrder/PreOrderBenefits";
import ReleaseTimeLine from "../components/preOrder/ReleaseTimeLine";

const PreOrder = () => {
   useEffect(() => {
      AOS.init({
         duration: 800,
         once: true,
         offset: 100,
      });
   }, []);

   return (
      <div className="overflow-hidden">
         <PreOrderHero />
         <PricingSection />
         <PreOrderBenefits />
         <ReleaseTimeLine />
      </div>
   );
};

export default PreOrder;
