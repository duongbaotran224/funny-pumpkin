import React from 'react'
import Fade from 'react-reveal/Fade';
import * as S from './styled';
import { Info, Form } from './components';
import { Hr } from './svgs'
import data from './data'


const Contact = () => {
  return (
    <S.Container>
      <Fade bottom>
        <S.Title>{data.title}</S.Title>
      </Fade>
      <S.Flex>
        <Info></Info>
        <S.Line as={Hr} />
        <Form></Form>
      </S.Flex>
    </S.Container>
  )
}
export default Contact

