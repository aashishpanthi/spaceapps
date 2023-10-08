import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

function LongDialog({ open, setOpen }) {
  const [AccordianOpen, setAccordianOpen] = useState(1);
  const handleAccordianOpen = (value) =>
    setAccordianOpen(AccordianOpen === value ? 0 : value);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Description of the categories</DialogHeader>
        <DialogBody divider className="h-[40rem] overflow-scroll">
          <Accordion open={AccordianOpen === 1}>
            <AccordionHeader onClick={() => handleAccordianOpen(1)}>
              Space Exploration and Astronomy
            </AccordionHeader>
            <AccordionBody>
              Space exploration encompasses the study and investigation of
              celestial bodies beyond Earth's atmosphere. It includes missions,
              probes, and telescopic observations aimed at understanding the
              cosmos, neighboring planets, stars, galaxies, and other celestial
              phenomena. This category involves collecting data on spacecraft
              missions, satellite observations, space telescopes, and astronaut
              activities. It provides valuable insights into our universe's
              mysteries, from planetary geology to astrophysics, and informs our
              understanding of the cosmos as a whole.
            </AccordionBody>
          </Accordion>
        </DialogBody>
      </Dialog>
    </>
  );
}

export default LongDialog;
