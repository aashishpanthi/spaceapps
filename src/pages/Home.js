import React from "react";
import TabsCustomAnimation from "../components/TabView";
import InfoCard from "../components/Card";
import data from "../data/data.json";

function Home() {
  return (
    <div className="px-10 grid grid-cols-[200px, 1fr]">
      <TabsCustomAnimation />
      {data.map((item, index) => {
        return (
          <InfoCard
            key={index}
            title={item.title}
            description={item.description}
            tags={item.tags}
            link={item.link}
          />
        );
      })}
    </div>
  );
}

export default Home;
