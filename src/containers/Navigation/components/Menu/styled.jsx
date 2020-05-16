import styled, { css } from 'styled-components'

export const Line = styled.div`
  width: 100%;
  height: 2px;
  margin: 2px 0;
  overflow: hidden;
`;

export const LineTop = styled(Line)`
  background-color: ${({ theme }) => theme.colors.BLACK};
  transition: 0.4s;
  position: relative;

  ::after, ::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.WHITE};
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    transition: transform .3s ease;
    transform: translateX(-200%);
  };

  ::after {
    transform: translateX(-100%);
  }

`;

export const LineBottom = styled(LineTop)`
 ::after, ::before {
    transition-delay: .1s;
  };
`;


export const Burger = styled.button`
  width: 50rem;
  padding: 16rem;
  margin-right: -16rem;

  &:hover {
    ${LineTop}, ${LineBottom}{
      ::before {
        transform: translateX(100%);
      };
      ::after {
        transform: translateX(200%);
      }
    };
  };
  
  ${LineTop} {
    ${props => props.cross && css`transform: rotate(-45deg) translate(-3.5px, 2px)`};
  };
  ${LineBottom} {
    ${props => props.cross && css`transform: rotate(45deg) translate(-3.5px, -2px);`};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const List = styled(Wrapper)`
  margin-top: 30rem;
  pointerEvents: none;
  overflow: hidden;
  opacity: 0;
  transition: all 1s cubic-bezier(.23,1,.32,1);
  ${props => props.isOpen && css`opacity: 1`};
  background: ${({ theme }) => theme.colors.WHITE};
  padding: 10rem 0 10rem 10rem;
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
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.BLACK};
    transition: transform .2s ease-out;
    transform: scaleX(0);
    transform-origin: right;
  };

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  };
  
  transform: translate3d(100%,0,0);
  opacity: 0;
  transition-delay: ${({ index }) => css`${(index + 1) * 0.3}s`};
  transition: 1s cubic-bezier(.23,1,.32,1);
  ${props => props.isOpen && css`transform: translate3d(0,0,0); opacity: 1`};
  
`