import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
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
            Aashish Maharjan connects online brands to their target audiences
            for the perfect communicating experience. At the Gyanodaya School,
            Aashish learned the importance of applying classic web designing
            ideas to modern brands strategies from experts in the field,
            including his Computer Teacher, Mr. Mannor Shakya.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/aashish-maharjan-788b661b0/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/aacismaharjan"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon"
              href="https://twitter.com/aacismhrzn"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-icon"
              href="https://www.facebook.com/aashishmaharjan.2001"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </React.Fragment>
  );
}
