// import React from 'react'
import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import * as S from './styled';
import mockData from '../../data'
import Zoom from 'react-reveal/Zoom';

const Item = ({ index, data }) => {
  return (
    <S.Item index={index} color={data.color}>
      <S.Square empty={data.text === ''} index={index} color={data.color} />
      <S.Text>{data.text}</S.Text>
    </S.Item>
  )
}

const Skills = () => {
  return (
    <S.Section>
      <Fade delay={500} bottom>
        <S.Title>{mockData["skills"].title}</S.Title>
        <S.Desc>{mockData["skills"].description}</S.Desc>
      </Fade>
      <Zoom duration={2000}>
        <S.List>
          {
            mockData["skills"]["list"].map((item, index) => {
              return (
                <Item key={index} index={index} data={item} />
              )
            })
          }
        </S.List>
      </Zoom>
      <S.WrapLine>
        <Fade delay={200}>
          <S.Line />
        </Fade>
      </S.WrapLine>
    </S.Section >
  )
}

export default Skills


