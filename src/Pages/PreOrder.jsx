// src/pages/PreOrder.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PreOrderHero from "../components/preorder/PreOrderHero";
import PricingSection from "../components/preorder/PricingSection";
import PreOrderBenefits from "../components/preorder/PreOrderBenefits";
import ReleaseTimeLine from "../components/preorder/ReleaseTimeLine";


const PreOrders = () => {
   useEffect(() => {
      AOS.init({
         duration: 800,
         once: true,
         offset: 100,
      });
   }, []);

   return (
      <div className="overflow-hidden">
         <PreOrderHero/>
         <PricingSection/>
         <PreOrderBenefits/>
         <ReleaseTimeLine/>
      </div>
   );
};

export default PreOrders;
