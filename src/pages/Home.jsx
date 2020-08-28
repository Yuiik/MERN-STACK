import React from "react";
import Section from "../components/Section";

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`fab ${icon}`}></i>
    </a>
  );
};

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/aashish-maharjan-788b661b0/",
      icon: "fa-linkedin-in",
    },
    {
      href: "https://github.com/aacismaharjan",
      icon: "fa-github",
    },
    {
      href: "https://twitter.com/aacismhrzn",
      icon: "fa-twitter",
    },
    {
      href: "https://www.facebook.com/aashishmaharjan.2001",
      icon: "fa-facebook-f",
    },
  ];

  return (
    <Section id="about">
      <h1 className="mb-0">
        Aashish
        <span className="text-primary">Maharjan</span>
      </h1>
      <div className="subheading mb-5">
        Purano Kalimati, Kathmandu, Nepal ·
        <a href="mailto:aashishmaharjan2001@gmail.com">
          aashishmaharjan2001@gmail.com
        </a>
      </div>
      <p className="lead mb-5">
        Aashish Maharjan connects online brands to their target audiences for
        the perfect communicating experience. At the Gyanodaya School, Aashish
        learned the importance of applying classic web designing ideas to modern
        brands strategies from experts in the field, including his Computer
        Teacher, Mr. Mannor Shakya.
      </p>
      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  );
}
