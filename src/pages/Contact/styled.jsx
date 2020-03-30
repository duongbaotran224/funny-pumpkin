import styled, { css } from 'styled-components'

export const Container = styled.div`
  max-width: 700rem;
  margin: auto;
  padding: 75rem 0 ;
  display: flex;
  flex-direction:column;
  align-items: center;

  ${({ theme }) => theme.media.mob`
    padding-top: 100rem
  `}
  background-color: #ffffff;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.H1};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  text-align: center;
  margin-bottom: 55rem;
  width: 100%;
  ${({ theme }) => theme.media.mob`
    text-align: left;
    margin-bottom: 80rem;
    width: 300rem;
  `};
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700rem;

  ${({ theme }) => theme.media.mob`
    flex-direction: column;
    align-items: center;
    width: 100%;
  `};
`;

export const Line = styled.svg`
  width: 100%;

  ${({ theme }) => theme.media.des`
    width: 1px;
    transform: rotate(90deg) translateX(125%) scale(2.5);
    flex-grow: 1;
  `};
`;


