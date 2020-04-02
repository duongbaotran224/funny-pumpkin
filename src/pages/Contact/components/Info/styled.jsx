import styled, { css, keyframes } from 'styled-components'

const phone_anim = keyframes`
  0% {
    transform: rotate(0deg)
	}
	10% {
    transform: rotate(-10deg)
  }
	20% {
    transform: rotate(10deg)
  }
	30% {
    transform: rotate(-10deg)
  }
	50% {
    transform: rotate(10deg)
  }
  75% {
    transform: rotate(0deg)
  }
	100% {
    transform: rotate(0deg)
  }
`

const address_anim = keyframes`
  0% {
    -webkit-transform:rotate(0) scale(.5) skew(1deg);
    transform:rotate(0) scale(.5) skew(1deg);
  }

  50% {
    -webkit-transform:rotate(0) scale(1) skew(1deg);
    transform:rotate(0) scale(1) skew(1deg);
  }

  100% {
    -webkit-transform:rotate(0) scale(1) skew(1deg);
    transform:rotate(0) scale(1) skew(1deg);
  }
`

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
  font-weight: 600;
  margin-left: 12rem;
`

export const Section = styled.div`
  width: 250rem;

  ${({ theme }) => theme.media.mob`
    width: 300rem;
    margin: auto;
    margin-bottom: 40rem; 
  `};
`
export const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  &:hover {
    ${Icon} {
      ${props => props.icon ? css`animation: ${address_anim} 1s infinite ease-in-out;`
    : css`animation: ${phone_anim} 1s infinite ease-in-out;`}
    }
  };
`

export const List = styled.div`
  > * {
    margin-bottom: 50rem
  }
`
export const Flex = styled.div`
  display: flex;
`