import React from 'react'
import { Space, Typography } from 'antd'
import { useSpring, animated } from 'react-spring'

const { Title, Text } = Typography

const Profile = () => {
  const propsTitleAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    delay: 1119
  })
  const propsInfoAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    delay: 2000
  })
  return (
    <div>
      <Space direction='vertical'>
        <animated.h1 style={propsTitleAnimation}>
          <Title style={{ marginBottom: 0 }}>Profile</Title>
        </animated.h1>
        <animated.p style={propsInfoAnimation}>
          <Text>
          In search of new challenges, I would like to join an organization to which I could bring my dynamism and my taste for challenge.
          </Text>
        </animated.p>
      </Space>
    </div>
  )
}

export default Profile