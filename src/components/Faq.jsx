import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";

function Faq() {
  return (
    <div className="bg-white p-[6%]">
      <h2 className="text-black text-[42px] text-center font-bold md:text-[53px] leading-[53px]">
        If you got questions <br className="md:block hidden" /> we have answer
      </h2>
      <p className="text-gray text-[14px] md:text-[18px] text-center mt-3">
        There are many variations of passages of Lorem Ipsum available, but the
        <br className="md:block hidden" />
        majority have suffered alteration in some form
      </p>
      <div className="w-[100%] md:w-[60%] flex flex-col justify-center mx-auto items-center mt-10">
        <Accordion className="my-2 shadow-lg p-3 rounded-lg">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="text-[16px] font-bold">
              What is QickPay?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="my-2 shadow-lg p-3 rounded-lg">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="text-[16px] font-bold">
              How do I recharge a phone number ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="my-2 shadow-lg p-3 rounded-lg">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="text-[16px] font-bold">
              How reliable is QickPay ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="my-2 shadow-lg p-3 rounded-lg">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="text-[16px] font-bold">
              How does your referral work ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="my-2 shadow-lg p-3 rounded-lg">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="text-[16px] font-bold">
              What is recharge credit ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Divider />
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
