import React, { Component } from 'react'

import * as ROUTES from '../../../../constants/routes';
import * as S from './styled';
import { NavLink } from 'react-router-dom';

const links = [
  { href: ROUTES.ABOUT, title: "About" },
  { href: ROUTES.WORKS, title: "Experiments" },
  { href: ROUTES.CONTACT, title: "Contact" },
]

const Burger = ({ onClick, isOpen }) => {
  return (
    <S.Burger cross={isOpen} onClick={onClick}>
      <S.LineTop />
      <S.Line />
      <S.LineBottom />
    </S.Burger>
  )
}

const Item = ({ onClick, href, title, index, isOpen }) => {
  return (
    <S.NavItem onClick={onClick} as={NavLink} to={href} index={index} isOpen={isOpen}>{title}</S.NavItem>
  )
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <S.Wrapper>
        <Burger onClick={this.toggleMenu} isOpen={this.state.open} />
        <S.List isOpen={this.state.open}>
          {
            links.map((item, index) => (
              <Item key={item.title}
                index={index}
                isOpen={this.state.open}
                onClick={this.toggleMenu}
                {...item}
              />
            ))
          }
        </S.List>
      </S.Wrapper>
    )
  }
}

