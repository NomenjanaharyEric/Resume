import React from 'react'
import { Space, Typography } from 'antd'
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3,DiReact,DiMongodb,DiMysql} from "react-icons/di"
import {SiPhp, SiNestjs, SiSymfony, SiPrisma} from "react-icons/si"
import {IoLogoJavascript,IoLogoNodejs} from "react-icons/io5"
import { useSpring, animated } from 'react-spring'

const { Title } = Typography

const skillsData = [
  {
    key: "HTML",
    icon: <AiFillHtml5 size={22}/>,
    label: "HTML",
  },
  {
    key: "Css",
    icon: <DiCss3 size={22}/>,
    label: "CSS",
  },
  {
    key: "PHP",
    icon: <SiPhp size={22}/>,
    label: "PHP",
  },
  {
    key: "JavaScript",
    icon: <IoLogoJavascript size={22}/>,
    label: "JavaScript",
  },
  {
    key: "NodeJs",
    icon: <IoLogoNodejs size={22}/>,
    label: "NodeJs",
  },
  {
    key: "ExpressJs",
    icon: <IoLogoNodejs size={22}/>,
    label: "ExpressJs",
  },
  {
    key: "NestJs",
    icon: <SiNestjs size={22}/>,
    label: "NestJs",
  },
  {
    key: "React",
    icon: <DiReact size={22}/>,
    label: "React",
  },
  {
    key: "Symfony",
    icon: <SiSymfony size={22}/>,
    label: "Symfony",
  },
  {
    key: "MongoDb",
    icon: <DiMongodb size={22}/>,
    label: "MongoDb",
  },
  {
    key: "MySQL",
    icon: <DiMysql size={22}/>,
    label: "MySQL",
  },
  {
    key: "Prisma",
    icon: <SiPrisma size={22}/>,
    label: "Prisma",
  },
]

const Skills = () => {
  const propsTitleAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    delay: 2999
  })
  const propsInfoAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    delay: 3000
  })
  return (
    <div style={{ marginTop: "1rem"}}>
      <Space direction='vertical' >
        <animated.h1 style={propsTitleAnimation}>
          <Title style={{ marginBottom:0}}>Skills</Title>
        </animated.h1>
        <animated.div style={propsInfoAnimation}>
          <Space direction='vertical'>
            {
              skillsData.map((skill)=>(
                <Space key={skill.key}>
                  {skill.icon}
                  <Title level={5}>{skill.label}</Title>
                </Space>
              ))
            }
          </Space>
        </animated.div>
      </Space>
    </div>
  )
}

export default Skills