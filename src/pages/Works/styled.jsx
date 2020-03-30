import styled from 'styled-components'


export const Container = styled.div`
  margin: 0 auto;
  width: 800rem;
  padding: 100rem 0 ;

  ${({ theme }) => theme.media.mob`
    margin-top: 100rem;
    padding: 0 50rem;
  `};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.H1};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  margin-bottom: 10rem;
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

export const GridList = styled.div`
  display: grid;

  grid-template-columns:  repeat(2, 1fr);
  grid-gap: 100rem;

  > * {
    align-self: center;
    justify-self: center
  };

  ${({ theme }) => theme.media.mob`
    grid-template-columns: 1fr;
  `};
`;


