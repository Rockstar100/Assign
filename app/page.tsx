"use client";

import Landing from "@/sections/Landing";
import Page from "@/sections/page";
import dynamic from "next/dynamic";

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
     <Page />
      )}
      
    </WaterWaveWrapper>
  );
}
