import React from 'react'
import Fade from 'react-reveal/Fade';
import * as S from './styled';

const Project = ({ index, data }) => {
  return (
    <Fade bottom cascade>
      <S.Card index={index}>
        <S.Image />
        <S.Title>
          <Fade top cascade>
            {data.title}
          </Fade>
        </S.Title>
      </S.Card>
    </Fade >
  )
}

export default Project 
