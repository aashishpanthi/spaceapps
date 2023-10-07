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
    <Tabs value="html" orientation="vertical">
      <TabsHeader className="w-32">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="flex flex-col">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
