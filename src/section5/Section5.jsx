import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MUIAccordion from '../components/accardion/Accordion'

import "./Section5.css";

const Section5 = () => {
  return (
    <div>
      <section className="section5">
        <div className="container">
          <div className="section5-obshiyy">
          <div className="section5-logo">
            <h2 className="section5_text">
              У тебя есть <span className="section5_text2"> ВОПРОСЫ</span>?
             </h2>
             <h3 className="section5-text">
              У нас есть <span className="section5-text2">ОТВЕТЫ</span>
              <h1>hello world</h1>
             </h3>
          </div>

          <div className="yello" style={{width: "100%", borderRadius: "20px"}}>
            <MUIAccordion />
          </div>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section5;

const MyAcc = () => {
  return (
    <>




      <Accordion style={{ marginBottom: "20px", background: "#ffbf69" }}>
        <AccordionSummary
          // style={{ display: "flex"}}
          expandIcon={<ExpandMoreIcon />}
          //   aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 1 Accordion бутту */}

      <Accordion style={{ marginBottom: "20px", background: "#ffbf69" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* 2 Accordion бутту */}

      <Accordion style={{ marginBottom: "20px", background: "#ffbf69" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* 3 Accordion бутту */}




      <Accordion style={{ marginBottom: "20px", background: "#ffbf69" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 4 Accordion бутту */}

      <Accordion style={{ marginBottom: "20px", background: "#ffbf69" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 5 Accordion бутту */}

      <Accordion style={{ background: "#ffbf69" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>




    </>
  );
};
