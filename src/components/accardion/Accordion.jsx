import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import './Accordion.css'

const accTitles = [
  {
    name: "А какие документы мне потребуются для поступления в вашу автошколу?",
    title:
      "А какие документы мне потребуются для поступления в вашу автошколу?",
    answer: `Необходимы следующие документы: Копия паспорта, Медицинская справка формы 083, Фото 3х4 (2шт, цветные)`,
  },
  {
    name: "А если я гражданин другого государства?",
    title: "А если я гражданин другого государства?",
    answer: `Для иностранных граждан необходимы следующие документы:  Копия паспорта или загранпаспорта, Медицинская справка 083, Фотографии 3×4 (цветные, на белом фоне, 2 шт.), Временный регистрационный талон, Баркод, ПИН`,
  },
  {
    name: "С какого возраста можно будет начать обучение?",
    title: "А если я гражданин другого государства?",
    answer: `Пойти учиться в автошколу можно не ранее, чем за два  месяца до вашего 17-летия.

    "А РАНЬШЕ СОВСЕМ СОВСЕМ НЕЛЬЗЯ?
    СОВСЕМ НЕЛЬЗЯ!"`,
  },
];
// 1 AccTitle End


const accTitles2 = [
  {
    name2: "А когда и где я получу свое водительское удостоверение?",
    title2: "А какие документы мне потребуются для поступления в вашу автошколу?",
    answer2: `Документ вы получите в ГУ «УНАА» при ГРС при ПКР, после успешной сдачи теоретического и практического экзамена.`,
  },
  {
    name2: "Где я смогу получить справку формы 083?",
    title2: "А если я гражданин другого государства?",
    answer2: `В поликлинике по месту жительства.

    P.S. Справку можно будет донести в течение недели после начала курса`,
  },
  {
    name2: "Когда начинаются практические занятия?",
    title2: "А если я гражданин другого государства?",
    answer2: `Через 4-5 недель после начала курса.`,
  },
];
// 2 AccTitle End


const MUIAccordion = () => {
  return (
    <div className="flex accord " style={{gap:'25px',}}>
      <div >
        {accTitles.map((el) => (
          <Accordion style={{background: "#ffbf69", marginBottom: "20px", width: "580px", borderRadius: "10px"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header" >
              <Typography style={{ fontWeight: 600, }}>{el.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{el.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      {/* 1 map End */}


      <div>
        {accTitles2.map((el) => (
          <Accordion className="section5-flex" style={{background: "#ffbf69", 
                                                       marginBottom: "20px", 
                                                       width: "500px", 
                                                       borderRadius: "10px"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontWeight: 600, }} >{el.name2}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{el.answer2}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      {/* 2 map End */}

    </div>
  );
};

export default MUIAccordion;