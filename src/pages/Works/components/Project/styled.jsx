import styled from 'styled-components'

export const Title = styled.h2`
  ${({ theme }) => theme.typography.H2};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  position: absolute;
  top: 50rem; 
  width: 120rem;
  right: 0
`
export const Image = styled.img`
  width: 300rem;
  height: 100%;

  @media(max-width: 600px) {
    width: 250rem;
  } 
`

export const Card = styled.div`
  position: relative;
  width: 350rem;
  height: 400rem;
  display: flex;
  justify-content: flex-start; 

  ${props => props.index % 2 !== 0 && `
    justify-content: flex-end;

    ${Title} {
      left: 0; 
      text-align: right;
    }`
  };

  ${props => props.index % 3 === 0 && 'height: 200rem'};


  @media(max-width: 600px) {
    width: 300rem;
    height: 200rem;
  };

`

