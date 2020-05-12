import React from 'react'
import Fade from 'react-reveal/Fade';
import * as S from './styled';

const Project = ({ index, data }) => {
  return (
    <Fade bottom cascade>
      <S.Card index={index} href={data.link} target="_blank">
        <S.Image src={data.image} />
        <S.Title>
          {data.title}
        </S.Title>
      </S.Card>
    </Fade >
  )
}

export default Project 
