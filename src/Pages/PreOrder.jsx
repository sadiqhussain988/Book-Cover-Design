// src/pages/PreOrder.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PreOrderHero from "../componets/preorder/PreOrderHero";
import PricingSection from "../componets/preOrder/PricingSection";
import PreOrderBenefits from "../componets/preOrder/PreOrderBenefits";
import ReleaseTimeLine from "../componets/preOrder/ReleaseTimeLine";

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
