import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800rem;
  padding: 130rem 0 ;

  ${({ theme }) => theme.media.mob`
    margin-top: 100rem;
    padding: 0 50rem;
  `};

  > * {
    box-sizing: border-box;
    margin-bottom: 200rem;
    padding-bottom: 80rem;
    position: relative;

    :last-child {
      margin-bottom: 0;
    }
  }
`;





