
import { css } from 'styled-components'

const breakpoints = [600, 1440];

const media = {
  mob: (...args) => `@media (max-width: ${breakpoints[0]}px) {
    ${css(...args)}
  }`,
  des: (...args) => `@media (min-width: ${breakpoints[0]}px) {
    ${css(...args)}
  }`,
  wide: (...args) => `@media (min-width: ${breakpoints[1]}px) {
    ${css(...args)}
  }`,
}
export default media