import React from 'react'
import { Fade, Zoom } from 'react-reveal';
import * as S from './styled';
import data from '../../data'

const Item = ({ index, color, text }) => {
  return (
    <S.Item index={index} color={color}>
      <S.Square empty={text === ''} index={index} color={color} />
      <S.Text>{text}</S.Text>
    </S.Item>
  )
}

const Skills = () => {
  return (
    <S.Section>
      <Fade delay={500} bottom>
        <S.Title>{data["skills"].title}</S.Title>
        {/* <S.Desc>{data["skills"].description}</S.Desc> */}
      </Fade>
      <Zoom duration={2000}>
        <S.List>
          {
            data["skills"]["list"].map((item, index) => {
              return (
                <Item key={index} index={index} {...item} />
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
    </S.Section>
  )
}

export default Skills


