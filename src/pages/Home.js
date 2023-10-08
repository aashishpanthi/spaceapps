import React, { useEffect, useState } from "react";
import TabsCustomAnimation from "../components/TabView";
import InfoCard from "../components/Card";
import Model from "../components/Model";

function Home({ data }) {
  const [Category, setCategory] = useState("all");
  useEffect(() => {
    console.log(Category);
  }, [Category]);

  const [open, setOpen] = useState(false);
  return (
    <div className="px-10 flex ">
      <TabsCustomAnimation
        Category={Category}
        setCategory={setCategory}
        open={open}
        setOpen={setOpen}
      />

      <Model open={open} setOpen={setOpen} />
      <div className="flex-1 flex justify-center">
        <div className="w-[900px]">
          {data.map((item, index) => {
            if (Category === item.category || Category === "all") {
              return (
                <InfoCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  tags={item.tags}
                  link={`/data/${item.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
