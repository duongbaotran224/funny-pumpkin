import React, { Component } from 'react'

import * as ROUTES from '../../constants/routes';
import * as S from './styled';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './icons/logo.svg';
import { ReactComponent as ScrollTop } from './icons/top.svg';
import Menu from './components/Menu';


class ButtonScrollTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      down: true,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      down: document.body.getBoundingClientRect().top > window.innerHeight / -3
    })
  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <S.Button down={this.state.down} onClick={this.scrollTop}>
        <S.Icon as={ScrollTop} size={24} />
      </S.Button>
    )

  }
}


const Navigation = () => {
  return (
    <S.Navibar>
      <S.NavTop>
        <S.Link as={Link} to={ROUTES.ABOUT}>
          <S.Icon as={Logo} w={35} h={40} />
        </S.Link>
        <Menu />
      </S.NavTop>

      <S.NavBot>
        <S.Text>@baotran</S.Text>
        <ButtonScrollTop />
      </S.NavBot>

    </S.Navibar>
  )
}
export default Navigation
