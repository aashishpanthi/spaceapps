import { Card, CardBody, Typography, Chip } from "@material-tailwind/react";
import { Link } from "react-router-dom/dist";

export default function InfoCard({ title, description, tags, link }) {
  return (
    <div className="w-10/12 mx-auto flex justify-center my-3 min-w-fit">
      <Card className="w-full  flex-row h-fit grid items-center">
        <CardBody>
          <Link to={link} className="text-blue-500 inline-block my-0">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {title}
            </Typography>
          </Link>
          <Typography color="gray" className="mb-8 font-normal d">
            {description}
          </Typography>
          <div className="chips flex gap-1">
            {tags.map((tag) => {
              return <Chip variant="ghost" value={tag} />;
            })}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
