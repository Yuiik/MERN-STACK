import React, { useState } from "react";
import Section from "../components/Section";

export default function Skills() {
  const [languageIcons, setLanguageIcons] = useState([
    "fa-html5",
    "fa-css3-alt",
    "fa-js-square",
    "fa-angular",
    "fa-react",
    "fa-node-js",
    "fa-sass",
    "fa-less",
    "fa-wordpress",
    "fa-gulp",
    "fa-grunt",
    "fa-npm",
  ]);

  const [workData, setWorkData] = useState([
    { icon: "fa-check", text: "Mobile-First, Responsive Design" },
    { icon: "fa-check", text: "Cross Browser Testing & Debugging" },
    { icon: "fa-check", text: "Cross Functional Teams" },
    { icon: "fa-check", text: "Agile Development & Scrum" },
  ]);

  const programmingLanguages = (
    <ul className="list-inline dev-icons">
      {languageIcons.map((icon, index) => (
        <li className="list-inline-item" key={index}>
          <i className={`fab ${icon}`}></i>
        </li>
      ))}
    </ul>
  );

  const workOverFlow = (
    <ul className="fa-ul mb-0">
      {workData.map(({ icon, text }, index) => (
        <li key={index}>
          <span className="fa-li">
            <i className={`fas ${icon}`}></i>
          </span>
          {text}
        </li>
      ))}
    </ul>
  );

  return (
    <Section id="skills" title="Skills">
      <div className="subheading mb-3">Programming Languages & Tools</div>
      {programmingLanguages}
      <div className="subheading mb-3">Workflow</div>
      {workOverFlow}
    </Section>
  );
}
