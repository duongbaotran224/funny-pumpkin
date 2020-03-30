import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import * as S from './styled';
import mockData from '../../data'
import { ReactComponent as Avatar } from '../../svgs/test3.svg'

const Myname = () => {
  return (
    <S.Section>
      <S.Flex>
        <Fade>
          <S.Avatar as={Avatar} />
        </Fade>
        <Fade delay={500} bottom cascade>
          <div>
            <S.Title>{mockData.title}</S.Title>
            <S.Desc>{mockData.description}</S.Desc>
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


