import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  tabsHeader,
} from "@material-tailwind/react";
import { useRef } from "react";

export default function TabsCustomAnimation({ Category, setCategory }) {
  const tabsHeader = useRef(null);
  const data = [
    {
      label: "All ",
      value: "all",
      desc: ``,
      clicked: true,
    },
    {
      label: "Climate and Weather ",
      value: "climate",
      desc: "",
    },

    {
      label: "Agriculture and Land",
      value: "agriculture",
      desc: "",
    },

    {
      label: "Space Exploration and Astronomy",
      value: "exploration",
      desc: ``,
    },
    {
      label: "Spectral / Engineering",
      value: "speceng",
      desc: ``,
    },
    {
      label: "Ocean and Marine",
      value: "marine",
      desc: ``,
    },
    {
      label: "Solar Hub",
      value: "solar",
      desc: ``,
    },
    {
      label: "Environment and Ecosystem",
      value: "environment",
      desc: ``,
    },
    {
      label: "Public Health and Survellience",
      value: "health",
      desc: ``,
    },
    {
      label: "Human Dimensions",
      value: "human",
      desc: ``,
    },
    {
      label: "Hydrosphere and Cyrosphere",
      value: "hydrosphere",
      desc: ``,
    },
    {
      label: "Disease and Injury",
      value: "disease",
      desc: ``,
    },
  ];

  window.onload = () => {
    console.log(tabsHeader.current.children[0].click());
  };

  return (
    <Tabs
      value="html"
      orientation="vertical"
      className="w-fit my-12  z-50 scale-110 flex flex-col "
    >
      <h1 className="text-center font-semibold text-xl my-3">Categories:</h1>
      <TabsHeader className="w-52 " ref={tabsHeader}>
        {data.map(({ label, value }) => (
          <Tab
            className="my-1"
            clicked
            key={value}
            value={value}
            onClick={() => {
              setCategory(value);
            }}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="flex flex-col gap-0">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={"value"} className="py-0 ">
            {desc}{" "}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
