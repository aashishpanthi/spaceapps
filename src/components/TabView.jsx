import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function TabsCustomAnimation() {
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: ``,
    },
    {
      label: "Climate ",
      value: "react",
      desc: "",
    },

    {
      label: "CO2",
      value: "vue",
      desc: "",
    },

    {
      label: "Angular",
      value: "angular",
      desc: ``,
    },

    {
      label: "Svelte",
      value: "svelte",
      desc: ``,
    },
  ];

  return (
    <Tabs
      value="html"
      orientation="vertical"
      className="w-fit absolute z-50 scale-110 top-1/2 -translate-y-1/2 "
    >
      <TabsHeader className="w-52">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="flex flex-col gap-0">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0 ">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
// dfsdj fdkj
