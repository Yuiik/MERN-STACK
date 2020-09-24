import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import CoronaTrackerThumb from '../assets/thumb.png'
import HamroJourneyThumb from '../assets/portfolio/hamrojourney.png'
import HimalanResortThumb from '../assets/portfolio/himalayanresort.png'
import RMSThumb from '../assets/portfolio/rms.png'
import QuizbeeThumb from '../assets/portfolio/quizbee.png'
import YoutubeCloneThumb from '../assets/portfolio/youtube-clone.png'
import SimplePortfolioThumb from '../assets/portfolio/simple_portfolio.png'
import CoolorsThumb from '../assets/portfolio/coolors.png'

export default function Portfolio() {
  const cards = [
    {
      img: CoronaTrackerThumb,
      title: 'Corona Tracker - ReactJS',
      desc:
        'It shows the overall corona cases throughout the world, Also presents data in readable diagrams/charts.',
      demo: 'https://aacismaharjan.github.io/coronatracker/',
      source: 'https://github.com/aacismaharjan/coronatracker',
    },
    {
      img: HimalanResortThumb,
      title: 'Himalayan Resort - ReactJS',
      desc:
        'A resort for fictional hotel, in which we can filter out the hotel rooms and see specific info about the hotel.',
      demo: 'https://himalayanresort.netlify.app/',
      source: 'https://github.com/aacismaharjan/himalayanresort',
    },
    {
      img: YoutubeCloneThumb,
      title: 'Youtube Clone - ReactJS',
      desc:
        'Simple Youtube Clone with React.js. It utilizes the Youtube api to fetch the data and display it',
      demo: 'https://aacismaharjan.github.io/youtube-clone/',
      source: 'https://github.com/aacismaharjan/youtube-clone',
    },
    {
      img: SimplePortfolioThumb,
      title: 'Simple Portfolio - HTML Template',
      desc:
        'Simple Portfolio Template using Pure HTML, CSS & Javascript. No use of any third party libraries.',
      demo: 'https://aacismaharjan.github.io/simple_portfolio/',
      source: 'https://github.com/aacismaharjan/simple_portfolio',
    },
    {
      img: HamroJourneyThumb,
      title: 'Hamro Journey - HTML, CSS & JS',
      desc:
        'This is simple HTML Template which I have created and won in SXC Web Design Competition 2019.',
      demo: 'https://aacismaharjan.github.io/hamrojourney/',
      source: 'https://github.com/aacismaharjan/hamrojourney',
    },
    {
      img: CoolorsThumb,
      title: 'Coolors Everywhere! - ReactJS',
      desc:
        'Coolors website for fullfiling every developers color need! Find colors, complementary colors, html colors & much more.',
      demo: 'https://aacismaharjan.github.io/coolors/',
      source: 'https://github.com/aacismaharjan/coolors',
    },
    {
      img: QuizbeeThumb,
      title: 'Quizbee - Reactjs and External Api',
      desc:
        'Simple Quizbee web app build with ReactJS which eats the api and interacts with users!',
      demo: 'https://aacismaharjan.github.io/quizbee/',
      source: 'https://github.com/aacismaharjan/quizbee',
    },
    {
      img: RMSThumb,
      title: 'Result Management System - C Programming',
      desc:
        'My first C Programming project in +2. It has CRUD operation only with File handling and has ton of features.',
      demo:
        'https://github.com/aacismaharjan/RMS/tree/master/Result%20Managaement%20System%20-%20Version%202.1.0%20-%20Compiled',
      source: 'https://github.com/aacismaharjan/RMS',
    },
  ]
  return (
    <Section id='portfolio' title='portfolio'>
      <div className='cards'>
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </Section>
  )
}
