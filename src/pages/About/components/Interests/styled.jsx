import styled, { css, keyframes } from 'styled-components'

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

export const Section = styled.section``;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.H2};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  font-size: 30rem;
  font-weight: 700;
  margin-bottom: 20rem;
  text-align: center;
  text-transform: none;
`;

export const WrapLine = styled.div`
  position: absolute;
  height: 100rem;
  transform-origin:50% 50%;
  width: 1px;
  left: 50%;
  top: 100%;
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
export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 400rem;
  height: 242rem; 
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

export const Text = styled.p`
  ${({ theme }) => theme.typography.BODY};
  color:${({ theme }) => theme.colors.TEXT_COLOR};
  color: #8f8f8f;
  font-weight: 600;
  letter-spacing: 0.2em;
  margin-left: 12rem;
  margin-top: 10rem;
`;

export const Button = styled.button`
  width: 40rem;
  height: 40rem;
  position: absolute;
  bottom: 0;
  z-index: 100;
  transition: all 0.3s ease;
  ${props => props.right ? css`left: 55%;` : css`left:35%;`};
  ${props => props.right ? css`transform: rotate(180deg)` : css`transform: none;`};

  &:hover {
    opacity: 0.3
  }
`;