import React from 'react'
import Fade from 'react-reveal/Fade';
import * as S from './styled';
import data from '../../data'
import { Avatar } from '../../svgs'

const Myname = () => {
  return (
    <S.Section>
      <S.Flex>
        <Fade>
          <S.Avatar as={Avatar} />
        </Fade>
        <Fade delay={500} bottom cascade>
          <div>
            <S.Title>{data.title}</S.Title>
            <S.Desc>{data.description}</S.Desc>
          </div>
        </Fade>
      </S.Flex>

      <S.WrapLine>
        <Fade delay={1000} duration={2000}>
          <S.Line />
        </Fade>
      </S.WrapLine>
    </S.Section>
  )
}


export default Myname


