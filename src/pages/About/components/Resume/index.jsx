import React from 'react'
import * as S from './styled';
import Fade from 'react-reveal/Fade';
import mockData from '../../data'

const Resume = () => {
  return (
    <S.Section>
      <S.Flex>
        <Fade delay={500} bottom cascade>
          <S.Title>
            I look forward to hearing from you. <br /> Thanks for stopping by
          </S.Title>
          <S.Button>Resume</S.Button>
        </Fade>
      </S.Flex>
    </S.Section>
  )
}

export default Resume



