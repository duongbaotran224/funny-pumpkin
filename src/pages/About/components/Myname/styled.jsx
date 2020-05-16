import styled, { keyframes } from 'styled-components'

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

export const Section = styled.div`
  position: relative; 

  ${({ theme }) => theme.media.mob`
    height: calc(100vh - 150rem)
  `};
`;

export const Flex = styled.div`
  width: 750rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.media.mob`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.H1};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  margin-bottom: 20rem;
`;

export const Desc = styled.p`
  ${({ theme }) => theme.typography.BODY};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  font-size: 18rem;
  text-align: justify;
  margin-bottom: 30rem;
    
  ${({ theme }) => theme.media.mob`
    width: 100%
  `};
`;

export const Avatar = styled.svg`
  width: 320rem;
  height: auto;
  margin-right: 50rem;
  margin-bottom: 30rem;

  ${({ theme }) => theme.media.mob`
    width: 200rem;
    margin-right: auto;
  `};
`;

export const Line = styled.div`
  position: relative;
  height: 100rem;
  background: #efefef;
  transform-origin: center;
  width: 1px;
  left: 50%;
  top: 100%;
  overflow: hidden;

  ::before{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
	  background: #000000;
	  animation: ${move} 1.5s infinite linear 
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


