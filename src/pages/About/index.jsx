// import React from 'react'
import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import * as S from './styled';
import Skills from './components/Skills'
import Myname from './components/Myname'
import Resume from './components/Resume'
import Interests from './components/Interests'


export default class About extends Component {
  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }
  render() {
    return (
      <S.Container>
        <Myname />
        <Skills />
        <Interests />
        <Resume />
      </S.Container >
    )
  }
}


