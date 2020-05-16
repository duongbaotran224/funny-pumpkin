import styled, { css, keyframes } from 'styled-components'

const translate = keyframes`
  0% {
    transform: translateY(0%)
  }
  25% {
    transform: translateY(20%)
  }
  50% {
    transform: translateY(0%)
  }
  75% {
    transform: translateY(-20%)
  }
  100% {
    transform: translateY(0%) 
  }
`;
const opacity = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`;
const move = keyframes`
  0% {
		transform: translateY(-200%) 
	}
	50% {
		transform: translateY(0%)
	}
	100% {
		transform: translateY(100%)
  }
`

export const Title = styled.h1`
  ${({ theme }) => theme.typography.H2};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  font-size: 30rem;
  font-weight: 700;
  margin-bottom: 30rem;
  text-transform: none;
  text-align: center;
`;

export const Desc = styled.p`
  ${({ theme }) => theme.typography.BODY};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  text-align: justify;
  width: 350rem;
  margin-bottom: 30rem;

  ${({ theme }) => theme.media.mob`
    width: 100%
  `};
`;

export const Section = styled.section``;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.mob`
    width: 100%;
    height: 100%;
  `};
`;


export const List = styled.div`
  height: 100%;
  margin-top: 150rem; 
  height: 200rem;
  position: relative;
  display: grid; 
  grid-template-columns: repeat(auto-fill,  minmax(40rem, 1fr) );

  grid-gap: 10rem;
  row-gap: 200rem;

  ${({ theme }) => theme.media.mob`
    height: 800rem;
  `};

`;

export const Text = styled.div`
  ${({ theme }) => theme.typography.BODY};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  white-space: nowrap;
  position: absolute;
  z-index: 10;
  left: 20rem;
`;

export const Square = styled.div`
  width: 15rem; 
  height: 15rem; 
  border-radius: 2rem;

  transition:  0.6s ease-out;
  transform: ${props => `rotate(${Math.floor(props.index + Math.random() * 200) + 1}deg)`};
  background: ${props => props.empty ? "#E1E1E1" : "#000000"};
  animation: ${props => css`${opacity} 0.5s linear ${props.index * 1}s 1`};
`;

export const Item = styled.button`
  background: transparent;
  position: relative;
  width: 40rem;
  height: 30%;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;

   &:hover {
    ${Square} {
      transition:  0.6s ease-out;
      transform: rotate(720deg);
      background: ${ props => props.empty ? "#E1E1E1" : props.color};
    };
    ${Text} {
      transition: all 0.3s ease ;
      font-weight: 600
    }
  };

  top: ${props => `${100 * Math.sin(2 * Math.PI * props.index / 1.6)}rem`};
  animation: ${ props => css`${translate} 2s linear ${0.3 * (props.index)}s infinite`};
`;


export const Line = styled.div`
  position: relative;
  height: 100rem;
  background: #efefef;
  transform-origin:50% 50%;
  width: 1px;
  left: 50%;
  top: 100%;
  overflow: hidden;

  ::after{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
	  // background: #000000;
	  // animation: ${move} 1.5s infinite linear 
  }
`;

export const WrapLine = styled.div`
  position: absolute;
  height: 100rem;
  transform-origin:50% 50%;
  width: 1px;
  left: 50%;
  top: 100%;
`;