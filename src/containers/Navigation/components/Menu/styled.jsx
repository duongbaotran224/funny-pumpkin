import styled, { css } from 'styled-components'

export const Line = styled.div`
  width: 100%;
  height: 2px;
  margin: 2px 0;
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
  width: 200rem;
  flex-direction: column;
  align-items: flex-end;
`;

export const List = styled(Wrapper)`
  margin-top: 30rem;
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
  }
  
`