import styled, { css } from 'styled-components'

export const Navibar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 25rem 50rem;
`;

export const NavTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start; 
`;

export const NavBot = styled(NavTop)``;

export const Link = styled.a`
  color: #010101;
  margin-bottom: 1.5rem; 
}
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
  transition: all 0.6s ease;
  ${props => props.down && css`transform: rotate(180deg)`};
`;
