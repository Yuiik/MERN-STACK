import React, { useState, useEffect } from "react"
import Section from "../components/Section"
import Skill from "../components/Skill"
import Pie3D from "../components/Chart/Pie3D"

const Skills = () => {
  const [repoItems, setRepoItems] = useState([])
  const [dataSource, setDataSource] = useState([])

  let data = {
    skills: [
      {
        title: "HTML",
        progress: "90%",
      },
      {
        title: "CSS",
        progress: "80%",
      },
      {
        title: "Javascript",
        progress: "65%",
      },
      {
        title: "Python",
        progress: "35%",
      },
      // {
      //   title: "C Programming",
      //   progress: "40%",
      // },
    ],
    frameworks: [
      {
        title: "React.js",
        progress: "70%",
      },
      {
        title: "Redux",
        progress: "85%",
      },
      {
        title: "Ant Design",
        progress: "50%",
      },
      {
        title: "Photoshop / Figma",
        progress: "60%",
      },
      {
        title: "Django",
        progress: "30%",
      },
      {
        title: "Bootstrap",
        progress: "60%",
      },
      {
        title: "Material-UI",
        progress: "30%",
      },
    ],
  }

  const getData = () => {
    fetch("https://api.github.com/users/aacismaharjan/repos?per_page=100")
      .then((res) => res.json())
      .then((data) => setRepoItems(data))
  }

  useEffect(() => {
    // Fetch from official api
    getData()

    // Offline api
    // setRepoItems(items)
  }, [])

  useEffect(() => {
    let languages = repoItems.reduce((total, item) => {
      const { language, stargazers_count } = item
      if (!language) return total

      if (!total[language]) {
        total[language] = {
          label: language,
          value: 1,
          stars: stargazers_count,
        }
      } else {
        total[language] = {
          ...total[language],
          value: total[language].value + 1,
          stars: total[language].stars + 1,
        }
      }

      return total
    }, {})

    const mostUsed = Object.values(languages)
      .sort((a, b) => {
        return b.value - a.value
      })
      .slice(0, 5)
    setDataSource(mostUsed)
  }, [repoItems])

  const { skills, frameworks } = data

  const skillsJsx = skills.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} />
    </div>
  ))

  const frameworksJsx = frameworks.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} secondary />
    </div>
  ))

  const languagesUsedChart = (
    <div className="col-md-6 py-1">
      <Pie3D data={dataSource} />
    </div>
  )

  return (
    <Section id="skills" title="Skills">
      <div className="subheading mb-3">Coding Languages</div>
      <div className="row mb-4">{skillsJsx}</div>
      <div className="subheading mb-3">Frameworks / Libraries</div>
      <div className="row mb-4">{frameworksJsx}</div>
      {/* <div className="subheading mb-3">Languages used as per Github</div>
      <div className="row mb-4">{languagesUsedChart}</div> */}
    </Section>
  )
}

export default Skills
