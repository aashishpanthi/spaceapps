import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FaInfoCircle } from "react-icons/fa";

export default function TabsCustomAnimation({
  Category,
  setCategory,
  open,
  setOpen,
}) {
  const data = [
    {
      label: "All ",
      value: "all",
      desc: ``,
    },
    {
      label: "Climate ",
      value: "climate",
      desc: "",
    },

    {
      label: "Agriculture",
      value: "agriculture",
      desc: "",
    },

    {
      label: "Health",
      value: "health",
      desc: ``,
    },

    {
      label: "Space Exploration",
      value: "exploration",
      desc: ``,
    },
  ];

  const handleInfoClick = () => {
    setOpen(!open);
  };

  return (
    <Tabs
      value="html"
      orientation="vertical"
      className="w-fit absolute z-50 scale-110 top-1/2 -translate-y-1/2 "
    >
      <TabsHeader className="w-52">
        {/* add a text about the filter */}
        <div className="text-black text-sm font-semibold text-center py-3">
          <span>Filter by Category</span>
          <FaInfoCircle
            className="inline-block ml-2 text-balck text-sm cursor-pointer"
            onClick={handleInfoClick}
          />
        </div>
        {data.map(({ label, value }) => (
          <Tab
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
          <TabPanel key={value} value={"value"} className="py-0 "></TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
