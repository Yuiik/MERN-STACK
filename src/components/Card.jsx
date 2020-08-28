import React from "react";

export default function Card({ card: { img, title, desc, demo, source } }) {
  return (
    <div className="card">
      <div className="card-thumbnail">
        <img src={img} alt="" width="100%" />
      </div>
      <div className="card-body">
        <h4 className="title">{title}</h4>
        <p>{desc}</p>
        <div className="btn-grp">
          <a href={demo} className="btn btn-secondary">
            Live Demo
          </a>
          <a href={source} className="btn btn-secondary">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
