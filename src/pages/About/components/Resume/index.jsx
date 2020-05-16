import React from 'react'
import * as S from './styled';
import Fade from 'react-reveal/Fade';
import data from '../../data'

const Resume = () => {
  return (
    <S.Section>
      <S.Flex>
        <Fade delay={500} bottom cascade>
          <S.Title>{data.resume.title}</S.Title>
          <S.Button href="https://drive.google.com/file/d/1F8vUfCsqRSzdmYqGWVYyZhk-C_Pis6zd/view?usp=sharing" target="_blank">Resume</S.Button>
        </Fade>
      </S.Flex>
    </S.Section>
  )
}

export default Resume



