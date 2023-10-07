import { Card, CardBody, Typography, Chip } from "@material-tailwind/react";

export default function InfoCard({ title, description, tags, link }) {
  return (
    <div className="w-10/12 mx-auto flex justify-center my-3 min-w-fit">
      <Card className="w-full  flex-row h-fit grid items-center">
        <CardBody>
          <a
            href={link}
            className="text-blue-500 inline-block my-0"
            target="_blank"
          >
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {title}
            </Typography>
          </a>
          <Typography color="gray" className="mb-8 font-normal d">
            {description}
          </Typography>
          <div className="chips flex gap-1">
            {tags.map((tag) => {
              return <Chip variant="outlined" value={tag} />;
            })}
          </div>

          <div className="flex gap-2 mt-2">
            <Chip value="chip filled" />
            <Chip variant="ghost" value="chip ghost" />
            <Chip color="blue" value="blue" />
            <Chip color="teal" value="teal" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
