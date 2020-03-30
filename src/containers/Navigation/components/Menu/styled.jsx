import styled, { css } from 'styled-components'

export const Line = styled.div`
  
    width: 100%;
    height: 2px;
    margin: 2px 0;

`;
export const LineTop = styled.div`
  width: 100%;
  height: 2px;
  background-color: #333;
  margin: 2px 0;
  transition: 0.4s;
  position: relative;

   ::after, ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color:#fff;
    transition: transform .3s ease;
    transform: translateX(-200%);
  };
  ::after {
    transform: translateX(-100%);
  }

  ${props => props.cross && css`transform: rotate(-45deg) translate(-3.5px, 2px)`};
`;

export const LineBottom = styled.div`
  width: 100%;
  height: 2px;
  background-color: #333;
  margin: 2px 0;
  transition: 0.4s;
  position: relative;

 ::after, ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color:#fff;
    transition: transform .3s ease .1s;
    transform: translateX(-200%);
  };
  ::after {
    transform: translateX(-100%);
  }

  ${props => props.cross && css`transform: rotate(45deg) translate(-3.5px, -2px);`};
`;

export const Button = styled.button`
   background-color: transparent;
  flex:0 0 auto;
	width:24rem;
	height:24rem;
	cursor:pointer;
  position:relative;
  text-align: left;
`;

export const Burger = styled.div`
 display: inline-block;
  cursor: pointer; 
  position:absolute;
  right: 0;
  width: 18rem;
  height: 18rem;
  &:hover {
    ${LineTop}, ${LineBottom}{
      ::before {
        transform: translateX(100%);
      }
    };
  }
  &:hover {
    ${LineTop}, ${LineBottom}{
      ::after {
        transform:translateX(200%);
      }
    }
  };
`;

export const Wrapper = styled.div`
  display: flex;
  width: 200rem;
  flex-direction: column;
  align-items: flex-end; 
`;

export const List = styled(Wrapper)`
  margin-top: 30rem;
`;

export const Icon = styled.svg`
  width: ${props => (props.size && `${props.size}rem`)
    || (props.w && `${props.w}rem`)
    || `24rem`
  };
  height: ${props => (props.size && `${props.size}rem`)
    || (props.h && `${props.h}rem`)
    || `24rem`
  };
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
`;

export const NavItem = styled.a`
  ${({ theme }) => theme.typography.H2};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  text-transform: capitalize;
  margin-bottom: 18rem;
  
  position: relative;

  ::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 2rem;
    bottom: 0;
    left: 0;
    background: #101010;
    transition: transform .2s ease-out;
    transform: scaleX(0);
    transform-origin: right;
  };

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  
`