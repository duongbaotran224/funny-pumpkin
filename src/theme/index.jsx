import media from './breakpoints'
import typography from './typography'

const colors = {
  TEXT_COLOR: "#101010",
  BACKGROUND_COLOR: "#fff",
  PRIMARY_COLOR: "#005CDD",
  SECONDARY_COLOR: "#6D59F0",
  WHITE: "#fff",
  BLACK: "#333",
};


const theme = {
  media,
  typography,
  colors,
};

export default theme;

// export const darkTheme = {
//   mode: 'dark',
//   PRIMARY_BACKGROUND_COLOR: '#353c51',
//   PRIMARY_TEXT_COLOR: '#767d92',
//   SECONDARY_TEXT_COLOR: '#ffffff',
//   PRIMARY_BUTTON_COLOR: '#152642',
//   SECONDARY_BUTTON_COLOR: '#506680',
// };
// export const lightTheme = {
//   mode: 'light',
//   PRIMARY_BACKGROUND_COLOR: '#ffefd5',
//   PRIMARY_TEXT_COLOR: '#DB7093',
//   SECONDARY_TEXT_COLOR: '#333333',
//   PRIMARY_BUTTON_COLOR: '#b9d6f3',
//   SECONDARY_BUTTON_COLOR: '#a1c9f1',
// };