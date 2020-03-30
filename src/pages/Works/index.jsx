// import React from 'react'
import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import * as S from './styled';
import { Project } from './components'
import mockData from './data'


const List = () => (
  <S.GridList cols={2} gap={100}>
    {
      mockData.map((item, index) => {
        return (
          <Project key={index} index={index} data={item} />
        )
      })
    }
  </S.GridList >
)



export default class WorksPage extends Component {

  render() {
    return (
      <S.Container>
        <Fade cascade bottom>
          <div>
            <S.Title>WORKS</S.Title>
            <S.Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</S.Desc>
            <List />
          </div>
        </Fade >
      </S.Container >
    )
  }
}


