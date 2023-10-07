import React from "react";
import TabsCustomAnimation from "../components/TabView";
import InfoCard from "../components/Card";

function Home({ data }) {
  return (
    <div className="px-10 flex ">
      <TabsCustomAnimation />
      <div className="flex-1 flex justify-center">
        <div className="w-[900px]">
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
      </div>
    </div>
  );
}

export default Home;
