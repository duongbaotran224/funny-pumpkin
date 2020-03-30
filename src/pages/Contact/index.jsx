import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import { Info, Form } from './components';
import * as S from './styled';
import { ReactComponent as Hr } from './icons/hr.svg'


export default class Contact extends Component {
  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }

  render() {
    return (
      <S.Container>
        <Fade bottom>
          <S.Title>LET’S TALK</S.Title>
        </Fade>
        <S.Flex>
          <Info></Info>
          <S.Line as={Hr} />
          <Form></Form>
        </S.Flex>
      </S.Container>
    )
  }
}


