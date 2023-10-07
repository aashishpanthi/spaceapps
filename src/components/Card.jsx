import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

export default function InfoCard() {
  return (
    <div className="w-10/12 mx-auto flex justify-center">
      <Card className="w-full  flex-row h-fit grid items-center">
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Lyft launching cross-platform service this week
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>
          <div className="chips flex gap-1">
            <Chip variant="ghost" value="#Tag1" />
            <Chip variant="ghost" value="#Tag2" />
            <Chip variant="ghost" value="#Tag3" />
            <Chip variant="ghost" value="#Tag4" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
