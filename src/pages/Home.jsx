import React from "react"
import Section from "../components/Section"
import ResumePDF from "../assets/resume.pdf"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/aashish-maharjan-788b661b0/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/aacismaharjan",
      icon: <FaGithub />,
    },
    {
      href: "https://twitter.com/aacismhrzn",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.facebook.com/aashishmaharjan.2001",
      icon: <FaFacebookF />,
    },
  ]

  return (
    <Section id="about">
      <h1 className="mb-0">
        Aashish
        <span className="text-primary">Maharjan</span>
      </h1>
      <div className="subheading mb-3">
        Purano Kalimati, Kathmandu, Nepal ·
        <a href="mailto:aashishmaharjan2001@gmail.com">
          aashishmaharjan2001@gmail.com
        </a>
      </div>
      <p className="lead mb-4">
        {/* Aashish Maharjan connects online brands to their target audiences for
        the perfect communicating experience. At the Gyanodaya School, Aashish
        learned the importance of applying classic web designing ideas to modern
        brands strategies from experts in the field, including his Computer
        Teacher, Mr. Mannor Shakya. */}
        Innovative, passionate and hard working certified Web Developer with
        more than 2 years of experience in Web Design and Web Development.
        Gained a lot experience in web development, specialized in frontend
        technologies. Had won SXC Web Design Competition at St. Xavier Computer
        Festival 2020.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
