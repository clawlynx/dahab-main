import React, { useEffect } from "react";
import MinerRepairHeadSection from "../../components/MinerRepair/MinerRepairHeadSection";
import RepairFeatures from "../../components/MinerRepair/RepairFeatures";
import BuyBox from "../../components/HostMining/BuyBox";
import PriceSection from "../../components/MinerRepair/PriceSection";
import RepairSolutions from "../../components/MinerRepair/RepairSolutions";
import FAQ from "../../components/MinerRepair/FAQ";

export default function MinerRepairPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MinerRepairHeadSection />
      <RepairFeatures />
      <BuyBox />
      <PriceSection />
      <RepairSolutions />
      <FAQ />
    </div>
  );
}
