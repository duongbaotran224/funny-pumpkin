import React, { Component } from 'react'

import * as ROUTES from '../../../../constants/routes';
import * as S from './styled';
import { NavLink } from 'react-router-dom';

const Burger = ({ onClick, cross }) => {
  return (
    <S.Button onClick={onClick}>
      <S.Burger cross={cross}>
        <S.LineTop cross={cross}></S.LineTop>
        <S.Line cross={cross}></S.Line>
        <S.LineBottom cross={cross}></S.LineBottom>
      </S.Burger>
    </S.Button>
  )
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <S.Wrapper>
        <Burger onClick={this.toggleMenu} cross={this.state.open} />
        {this.state.open &&
          <S.List>
            <S.NavItem onClick={this.toggleMenu} as={NavLink} to={ROUTES.ABOUT}>About</S.NavItem>
            <S.NavItem onClick={this.toggleMenu} as={NavLink} to={ROUTES.WORKS}>Works</S.NavItem>
            <S.NavItem onClick={this.toggleMenu} as={NavLink} to={ROUTES.CONTACT}>Contact</S.NavItem>
          </S.List>
        }
      </S.Wrapper>
    )
  }
}

