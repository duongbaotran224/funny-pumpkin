import React, { Component } from 'react'
import * as S from './styled';

const Burger = ({ onClick, cross }) => {
  return (
    <S.Button onClick={onClick}>
      <S.Burger cross={cross}>
        <S.Line cross={cross}></S.Line>
        <S.Line cross={cross}></S.Line>
      </S.Burger>

      <S.Cross cross={cross}>
        <S.CrossLine cross={cross}></S.CrossLine>
        <S.CrossLineRight cross={cross} ></S.CrossLineRight>
      </S.Cross>
    </S.Button>
  )
}
export default Burger

