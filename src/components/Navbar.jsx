import React, { useState, useEffect } from "react";
import Avatar from "../assets/avatar.jpg";

export default function Navbar() {
  const [myAvatar, setMyAvatar] = useState(Avatar);
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/aacismaharjan")
      .then((res) => res.json())
      .then((data) => {
        if (data.avatar_url) {
          setMyAvatar(data.avatar_url);
          setUsername(data.name);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="/">
        <span className="d-block d-lg-none">{username}</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={myAvatar}
            alt="Aashish Maharjan"
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
