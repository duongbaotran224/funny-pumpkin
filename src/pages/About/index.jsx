// import React from 'react'
import React from 'react'
import * as S from './styled';
import { Skills, Myname, Resume, Interests } from './components'


const About = () => {
  return (
    <S.Container>
      <Myname />
      <Skills />
      <Interests />
      <Resume />
    </S.Container>
  )
}
export default About


