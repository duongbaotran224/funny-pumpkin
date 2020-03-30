import styled, { css } from 'styled-components'

export const Line = styled.span`
  display:block;
	width: 18rem;
  height: 2px;
	margin-bottom: 5rem;
	overflow: hidden;
	position: relative;
  transition: opacity 0.3s ease;

  ::after, ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color:rgb(15,15,15);
    transition: transform .3s ease;
  };

  &:nth-child(2):after, &:nth-child(2):before  {
	  transition-delay: 100ms;
  };
  ::before {
    ${props => props.cross ? css`transform: translateX(100%)` : css`transform: translateX(-200%)`};
  }; 
  ::after {
    ${props => props.cross ? css`transform: translateX(200%)` : css`transform: translateX(0)`};
  };
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
  position:absolute;
  top: 0;
  right: 0;
  width: 18rem;
  height: 18rem;
  &:hover {
    ${Line}{
      ::before {
        transform: translateX(0%);
      }
    }
  }
  &:hover {
    ${Line}{
      ::after {
        transform:translateX(200%);
      }
    }
  };
  ${props => props.cross && css`pointer-event: none; z-index: -1`};
`;

export const Cross = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 14rem;
  height: 14rem;
  overflow: hidden;
  pointer-events: none;
  ${props => props.cross && css`pointer-event: all`};
`;

export const CrossLine = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform .8s cubic-bezier(.165,.84,.44,1) .4s;
  transform: translate(-25rem,-25rem);
  ${props => props.cross && css`transform: translate(0, 0)`};

  ::before {
    content: '';
    position: absolute;
    display: block;
    width: 30rem;
    height: 1px;
    background-color: #000000;
    top: 0;
    left: 0;
    transform-origin: top left;
    transform: rotate(43deg);
  };

`;

export const CrossLineRight = styled.span`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: transform .8s cubic-bezier(.165,.84,.44,1) .2s;
  transform: translate(25rem,-25rem);
  ${props => props.cross && css`transform: translate(0, 0)`};


  ::before {
    content: '';
    position: absolute;
    display: block;
    width: 30rem;
    height: 1px;
    background-color: #000000;
    top: 0;
    right: 0;
    transform-origin: top right;
    transform: rotate(-43deg);
  };

`;


