import React, { Component } from 'react'
import Section from '../components/Section'
import Skill from '../components/Skill'

class Skills extends Component {
  state = {
    workData: [
      { icon: 'fa-check', text: 'Mobile-First, Responsive Design' },
      { icon: 'fa-check', text: 'Cross Browser Testing & Debugging' },
      { icon: 'fa-check', text: 'Cross Functional Teams' },
      { icon: 'fa-check', text: 'Agile Development & Scrum' },
    ],

    skills: [
      {
        title: 'HTML',
        progress: '90%',
      },
      {
        title: 'CSS',
        progress: '80%',
      },
      {
        title: 'Javascript',
        progress: '65%',
      },
      {
        title: 'Python',
        progress: '35%',
      },
      {
        title: 'C Programming',
        progress: '40%',
      },
      {
        title: 'Photoshop / Figma',
        progress: '60%',
      },
    ],
    frameworks: [
      {
        title: 'Bootstrap',
        progress: '60%',
      },
      {
        title: 'Material-UI',
        progress: '30%',
      },
      {
        title: 'React.js',
        progress: '55%',
      },
      {
        title: 'Django',
        progress: '30%',
      },
    ],
  }

  render() {
    const { skills, frameworks } = this.state

    const skillsJsx = skills.map((skill, index) => (
      <div className='col-md-8 py-1' key={index}>
        <Skill skill={skill} />
      </div>
    ))

    const frameworksJsx = frameworks.map((skill, index) => (
      <div className='col-md-8 py-1' key={index}>
        <Skill skill={skill} secondary />
      </div>
    ))

    // const workOverFlow = (
    //   <ul className='fa-ul mb-0'>
    //     {workData.map(({ icon, text }, index) => (
    //       <li key={index}>
    //         <span className='fa-li'>
    //           <i className={`fas ${icon}`}></i>
    //         </span>
    //         {text}
    //       </li>
    //     ))}
    //   </ul>
    // )

    return (
      <Section id='skills' title='Skills'>
        <div className='subheading mb-3'>Coding Languages</div>
        <div className='row mb-4'>{skillsJsx}</div>
        <div className='subheading mb-3'>Frameworks / Libraries</div>
        <div className='row mb-4'>{frameworksJsx}</div>
        {/* <div className="subheading mb-3">Workflow</div>
        {workOverFlow} */}
      </Section>
    )
  }
}

export default Skills
