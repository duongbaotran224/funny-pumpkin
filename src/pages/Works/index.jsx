// import React from 'react'
import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import * as S from './styled';
import { Project } from './components'
import data from './data'


const WorksPage = () => {
  return (
    <S.Container>
      <Fade cascade bottom>
        <div>
          <S.Title>{data.title}</S.Title>
          <S.Desc>{data.description}</S.Desc>
          <S.GridList cols={2} gap={100}>
            {
              data.list.map((item, index) => {
                return (
                  <Project key={index} index={index} data={item} />
                )
              })
            }
          </S.GridList>
        </div>
      </Fade >
    </S.Container >
  )
}
export default WorksPage


