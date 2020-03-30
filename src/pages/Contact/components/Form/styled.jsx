import styled, { css, keyframes } from 'styled-components'

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Section = styled.div`
  width: 300rem;

  ${({ theme }) => theme.media.mob`
    margin-top: 80rem; 
  `};
`
export const Form = styled.form`
  > * {
    margin-bottom: 40rem
  }
`;

export const Input = styled.input`
  width: 100%;
  ${({ theme }) => theme.typography.BODY};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 10rem ;
  transition: all 0.3s ease;

  ::placeholder {
    color:${({ theme }) => theme.colors.TEXT_COLOR};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
  }

  &:hover{
    border-bottom: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
  }

  ${({ theme }) => theme.media.mob`
    font-size: 16px
  `}
`;

export const TextArea = styled.textarea`
  width: 100%;
  ${({ theme }) => theme.typography.BODY};
  color:${({ theme }) => theme.colors.TEXT_COLOR};
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 10rem ;
  transition: all 0.3s ease;

  ::placeholder {
    color:${({ theme }) => theme.colors.TEXT_COLOR};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
  }

  &:hover{
    border-bottom: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
  }
  ${({ theme }) => theme.media.mob`
    font-size: 16px
  `}
`;

export const Button = styled.button`
  width: 120rem;
  min-height: 20px;

  ${({ theme }) => theme.typography.BUTTON};

  display: flex;
  align-items: center;
  justify-content: center;

  color:  ${({ theme }) => theme.colors.WHITE};
  background: ${({ theme }) => theme.colors.TEXT_COLOR};
  border: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
  padding: 4rem 20rem 6rem 20rem ;
  transition: all 0.3s ease;

  &:disabled {
    // color:  ${({ theme }) => theme.colors.TEXT_COLOR};
    // background:  ${({ theme }) => theme.colors.BACKGROUND_COLOR};
    cursor: not-allowed;
  }
 
  // &:hover {
    // color:  ${({ theme }) => theme.colors.TEXT_COLOR};
    // background:  ${({ theme }) => theme.colors.BACKGROUND_COLOR};
  // }

  

  ${props => props.state === 'sending' && css`
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 0;
    border-color:  #efefef;
    border-width: 2px;
    font-size:0;
    border-left-color: black;
    background-color: white;
    animation: ${rotating} 1s 0.25s linear infinite
  `}
  
  ${props => props.state === 'done' && css`
    color:  ${({ theme }) => theme.colors.TEXT_COLOR};
    background:  ${({ theme }) => theme.colors.BACKGROUND_COLOR};
  `}
  `