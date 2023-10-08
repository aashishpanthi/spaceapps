import React, { useEffect, useState } from "react";
import TabsCustomAnimation from "../components/TabView";
import InfoCard from "../components/Card";
import Model from "../components/Model";
import Skeleton from "../components/Skeleton";
import { Typography } from "@material-tailwind/react";

function Home({ data, Category, handleCategoryChange }) {
  useEffect(() => {
    console.log(Category);
  }, [Category]);

  console.log(data.length);

  const [open, setOpen] = useState(false);
  return (
    <div className="px-10 flex max-w-6xl mx-auto">
      <TabsCustomAnimation
        Category={Category}
        handleCategoryChange={handleCategoryChange}
        open={open}
        setOpen={setOpen}
      />

      <Model open={open} setOpen={setOpen} />
      <div className="flex-1 flex justify-center">
        <div className="mt-12">
          {data.length === 0 ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            <div>
              <Typography color="gray">
                Showing {data.length} results
              </Typography>

              {data.map((item, index) => {
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
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
