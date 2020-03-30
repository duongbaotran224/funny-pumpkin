import styled, { keyframes } from 'styled-components'

export const Section = styled.div`
  // ${({ theme }) => theme.media.mob`
  //   min-height: calc(100vh - 100rem)
  // `};
`;

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
  margin-bottom: 40rem;
  text-align: center;
  text-transform: none;
`;

export const Button = styled.button`
  width: 120rem;
  min-height: 20px;

  ${({ theme }) => theme.typography.BUTTON};
  text-transform: lowercase;

  display: flex;
  align-items: center;
  justify-content: center;

  color:  ${({ theme }) => theme.colors.WHITE};
  background: ${({ theme }) => theme.colors.TEXT_COLOR};
  border: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
  padding: 4rem 20rem 6rem 20rem ;
  transition: all 0.3s ease;
 
  &:hover {
    color:  ${({ theme }) => theme.colors.TEXT_COLOR};
    background:  ${({ theme }) => theme.colors.BACKGROUND_COLOR};
  }

`;