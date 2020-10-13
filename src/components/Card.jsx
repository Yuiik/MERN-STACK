import React from 'react'
// import loadingGif from '../assets/loading.svg'

export default function Card({ card: { img, title, desc, demo, source } }) {
  return (
    <div className='card' data-aos='flip-left'>
      <div
        className='card-thumbnail'
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className='card-body'>
        <h4 className='title'>{title}</h4>
        <p>{desc}</p>
        <div className='btn-grp'>
          <a
            href={demo}
            className='btn btn-primary'
            target='_blank'
            rel='noopener noreferrer'
          >
            Live Demo
          </a>
          <a
            href={source}
            className='btn btn-secondary'
            target='_blank'
            rel='noopener noreferrer'
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}
