import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import CoronaTrackerThumb from "../assets/thumb.png";
import HamroJourneyThumb from "../assets/portfolio/hamrojourney.png";
import HimalanResortThumb from "../assets/portfolio/himalayanresort.png";
import RMSThumb from "../assets/portfolio/rms.png";

export default function Portfolio() {
  const cards = [
    {
      img: CoronaTrackerThumb,
      title: "Corona Tracker - ReactJS",
      desc:
        "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows",
      demo: "https://aacismaharjan.github.io/coronatracker/",
      source: "https://github.com/aacismaharjan/coronatracker",
    },
    {
      img: HamroJourneyThumb,
      title: "Hamro Journey - HTML, CSS & JS",
      desc:
        "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows",
      demo: "https://aacismaharjan.github.io/hamrojourney/",
      source: "https://github.com/aacismaharjan/hamrojourney",
    },
    {
      img: HimalanResortThumb,
      title: "Himalayan Resort - ReactJS",
      desc:
        "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows",
      demo: "https://himalayanresort.netlify.app/",
      source: "https://github.com/aacismaharjan/himalayanresort",
    },
    {
      img: RMSThumb,
      title: "Result Management System - C Programming",
      desc:
        "When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows",
      demo:
        "https://github.com/aacismaharjan/RMS/tree/master/Result%20Managaement%20System%20-%20Version%202.1.0%20-%20Compiled",
      source: "https://github.com/aacismaharjan/RMS",
    },
  ];
  return (
    <Section id="portfolio" title="portfolio">
      <div className="cards">
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </Section>
  );
}
