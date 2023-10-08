import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function CardDefault() {
  return (
    <Card className="mt-6 w-72">
      <CardHeader color="blue-gray" className="relative h-fit">
        <img src="/emission-in-Nepal.jpeg" alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          CO<sub>2</sub> Emission Analysis
        </Typography>
        <Typography>
          We've analyzed the CO<sub>2</sub> emission data of Nepal from 1960 to
          2022.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to="/emission-analysis" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardDefault;
