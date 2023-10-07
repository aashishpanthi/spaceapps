import React from "react";
import TabsCustomAnimation from "../components/TabView";
import InfoCard from "../components/Card";

function Home() {
  return (
    <div className="px-10 grid grid-cols-[200px, 1fr]">
      <TabsCustomAnimation />
      <InfoCard />
    </div>
  );
}

export default Home;
