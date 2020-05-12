import styled from 'styled-components'

export const Title = styled.h2`
  ${({ theme }) => theme.typography.H2};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  position: absolute;
  top: 50rem; 
  width: 100rem;
  right: 0;
`
export const Image = styled.img`
  object-fit: contain;
  width: 300rem;
  height: 100%;
  background: whitesmoke;
  padding: 50rem;
  transition: all 0.5s ease;

  @media(max-width: 600px) {
    width: 250rem;
  } 
`

export const Card = styled.a`
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

  &:hover {
    ${Image} {
      transform: translateY(-10px) ;
    }
  }

`

