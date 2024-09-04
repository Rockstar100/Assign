"use client";

import Contact from "@/sections/Contact";
import Landing from "@/sections/Landing";
import Page from "@/sections/page";
import { Serve } from "@/sections/Serve";
import dynamic from "next/dynamic";
import About from "@/sections/About";
import ContactForm from "@/sections/ContactForm";

const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/WaterWaveWrapper"),
  { ssr: false }
);

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="8"
      perturbance="0.3"
      resolution="2048"
    >
      
      {() => (
       <div className="pb-8">
        <About/>
       {/* <Landing /> */}
       <Page />
       {/* <Serve /> */}
       {/* <Contact /> */}
       <ContactForm/>
     </div> 
    
      )}
      
    </WaterWaveWrapper>
  );
}
