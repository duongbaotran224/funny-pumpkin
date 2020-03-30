import { css } from 'styled-components'

const baseStyle = css`
  font-family: Darker Grotesque;
  font-style: normal;
`;

const H1 = css`
  ${baseStyle}; 
  font-weight: 800;
  font-size: 32rem;
  line-height: ${43 / 32};
  letter-spacing: 0.1em;
`

const H2 = css`
  ${baseStyle}; 
  font-weight: 600;
  font-size: 18rem;
  line-height: ${24 / 18};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const BODY = css`
  ${baseStyle}; 
  font-weight: 400;
  font-size: 16rem;
  line-height: ${22 / 16};
  letter-spacing: 0.05em;
`
const BUTTON = css`
  ${baseStyle}; 
  font-weight: 600;
  font-size: 18rem;
  line-height: ${24 / 18};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const typography = {
  H1, H2, BODY, BUTTON
}

export default typography