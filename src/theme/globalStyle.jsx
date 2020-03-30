import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
  html,body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Darker Grotesque, sans-serif';
    font-size: calc(1vw/12);
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  * {
    vertical-align: baseline;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    text-decoration: none;
  }


  a, button {
    pointer-events: all;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
      width: 7px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
      -webkit-border-radius: 7px;
      border-radius: 7px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 7px;
      border-radius: 7px;
      background: rgba(0,0,0,0.2); 
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(0,0,0,0.2); 
  }

  ${({ theme }) => theme.media.wide`
    html, body {
      font-size: 1.2px;
    }
  `}

    
  ${({ theme }) => theme.media.mob`
    html, body {
      font-size: calc(100vw/400);
    }
  `}

  @keyframes smile {
    100% {
    d: path("M204.717 197.349C205.082 196.63 202.713 196.45 202.349 196.989C197.976 204.533 182.307 204.174 177.57 196.989C177.206 196.45 174.655 196.63 175.202 197.169C180.668 205.252 199.798 205.97 204.899 197.169L204.717 197.349Z")
    }
    0% {
      d: path("M199.896 201.3C200.104 200.985 198.708 200.264 198.5 200.5C193.5 203 188.5 202.5 185 200.5C184.792 200.264 183.188 201.264 183.5 201.5C186.621 205.045 197 206 200 201.222L199.896 201.3Z")
    }
  }
  
// @keyframes hair{
//     0% {
//       d: path("M284.718 117.617L284.719 117.618C285.183 122.263 285.028 127.899 284.834 133.554C284.821 133.953 284.807 134.352 284.793 134.75C284.61 139.995 284.429 145.196 284.717 149.555C282.482 188.406 288.194 211.324 297.606 230.846C298.116 232.318 298.643 233.785 299.17 235.25C301.048 240.478 302.922 245.693 304.01 251.126C306.177 262.759 304.517 276.276 294.703 284.114L294.703 284.115C289.589 288.212 283.248 289.988 276.633 290.534C270.017 291.079 263.14 290.394 256.962 289.58L256.942 289.729L256.961 289.58C245.289 288.055 234.029 284.802 223.389 280.023L223.369 280.014L223.347 280.011C219.806 279.556 216.539 278.196 214.14 274.93L214.14 274.93C213.752 274.406 213.713 273.947 213.851 273.54L213.861 273.509L213.858 273.476C213.658 271.659 214.811 269.633 216.563 268.844L216.58 268.837L216.594 268.825C216.844 268.628 217.134 268.44 217.517 268.345C218.975 268.037 220.381 267.576 221.735 266.961L221.735 266.961L221.744 266.956C223.923 265.782 225.947 264.454 227.867 262.973C231.384 260.259 233.856 256.931 235.958 253.349C237.009 251.559 237.968 249.704 238.919 247.832C239.075 247.525 239.231 247.217 239.387 246.91C240.182 245.339 240.98 243.761 241.833 242.199L241.838 242.19L241.842 242.181C245.136 233.46 246.57 223.407 247.947 213.756C248.363 210.838 248.774 207.956 249.229 205.159L249.229 205.159C252.181 186.763 250.937 168.168 248.092 149.837L248.089 149.818L248.082 149.802C245.751 144.245 242.903 138.842 239.588 133.745L239.588 133.744C234.586 126.143 228.356 120.025 221.679 114.358C218.419 111.59 215.05 108.929 211.667 106.256L211.426 106.066C207.961 103.329 204.482 100.575 201.084 97.6763L201.083 97.6755C197.574 94.7291 194.27 91.427 191.277 87.8203C187.285 83.0133 179.881 83.117 175.996 87.9746C174.963 89.245 173.878 90.5157 172.794 91.7357L172.789 91.7412L172.785 91.7471C170.375 95.0621 168.239 98.6178 166.163 102.181C165.77 102.857 165.378 103.533 164.988 104.208C163.318 107.093 161.661 109.954 159.903 112.673L159.903 112.674C153.854 122.138 147.444 131.347 140.671 140.353L140.671 140.354C136.685 145.7 132.476 150.863 128.262 156.032C127.504 156.963 126.745 157.893 125.988 158.825L125.966 158.852L125.958 158.887C125.076 162.879 124.277 166.896 123.478 170.91C122.166 177.503 120.856 184.088 119.185 190.541C118.136 194.573 117.045 198.602 115.954 202.632C113.603 211.315 111.249 220.009 109.306 228.771L109.304 228.782L109.303 228.793C107.958 247.979 107.642 268.638 117.753 285.429C120.139 289.39 121.843 290.812 124.152 292.707C124.189 293.064 124.138 293.376 124.002 293.69L123.997 293.7L123.994 293.711C123.747 294.635 123.105 295.515 121.906 296.056L121.904 296.057C108.91 302.147 94.1122 302.451 80.8608 296.869C67.6121 291.288 58.0709 280.479 52.757 267.48L52.7567 267.479C47.9595 255.904 46.876 242.754 49.6612 230.569C49.6862 230.471 49.7112 230.384 49.7369 230.296L49.7372 230.295C49.7629 230.206 49.7893 230.115 49.8158 230.011C52.7579 218.429 55.7427 212.768 68.1157 190.657C75.7579 179.15 79.0112 172.468 83.7653 162.705C84.9351 160.303 86.1957 157.714 87.635 154.82C90.6676 148.724 91.8601 142.63 92.5737 136.46C92.8313 134.233 93.0263 132 93.2225 129.753C93.5705 125.768 93.9222 121.741 94.6331 117.635C95.3605 114.874 96.0169 112.305 96.6342 109.89C98.9145 100.968 100.661 94.1332 103.485 87.386C107.071 78.8185 112.395 70.3904 122.764 58.0278C133.128 47.8537 141.997 42.2782 149.755 38.9472C156.676 35.976 162.716 34.7884 168.162 33.7173C168.824 33.5873 169.476 33.4589 170.121 33.3293C170.122 33.3292 170.122 33.329 170.123 33.3289L170.125 33.3286L170.143 33.3255L170.214 33.3133L170.484 33.2671C170.717 33.2273 171.05 33.1705 171.451 33.1023C172.253 32.9658 173.327 32.7839 174.413 32.602C175.499 32.4201 176.598 32.2382 177.45 32.1018C177.877 32.0336 178.241 31.9769 178.511 31.9372C178.646 31.9174 178.757 31.9019 178.84 31.8915C178.927 31.8805 178.974 31.8763 178.988 31.8763H178.992C179.014 31.8763 179.033 31.8763 179.046 31.8759C179.053 31.8756 179.063 31.8752 179.074 31.8737C179.082 31.8726 179.109 31.8688 179.137 31.8517C179.158 31.8388 179.174 31.8223 179.186 31.8047C179.194 31.8008 179.206 31.7957 179.222 31.7893C179.28 31.7667 179.38 31.7343 179.55 31.6894C180.232 31.5097 181.975 31.1471 186.417 30.4201C199.694 29.658 211 30.4541 221.727 33.5085C232.457 36.5634 242.616 41.8794 253.593 50.1672C275.986 67.128 282.186 91.67 284.718 117.617Z")
//     }
//     100% {
//       d: path("M101.282 118.617L101.281 118.618C100.817 123.263 100.972 128.899 101.166 134.554C101.179 134.953 101.193 135.352 101.207 135.751C101.39 140.996 101.571 146.196 101.283 150.555C103.518 189.406 97.806 212.324 88.3943 231.846C87.8841 233.318 87.357 234.785 86.8304 236.25C84.9518 241.478 83.0779 246.693 81.9899 252.126C79.8228 263.759 81.4835 277.276 91.2967 285.114L91.2969 285.115C96.411 289.212 102.752 290.988 109.367 291.534C115.983 292.079 122.86 291.394 129.038 290.58L129.057 290.722L129.039 290.58C140.711 289.055 151.971 285.802 162.611 281.023L162.631 281.014L162.653 281.011C166.194 280.556 169.461 279.196 171.86 275.93L171.86 275.93C172.248 275.406 172.287 274.947 172.149 274.54L172.139 274.509L172.142 274.476C172.342 272.659 171.189 270.633 169.437 269.844L169.42 269.837L169.406 269.825C169.156 269.628 168.866 269.44 168.483 269.345C167.025 269.037 165.619 268.576 164.265 267.961L164.265 267.961L164.256 267.956C162.077 266.782 160.053 265.454 158.133 263.973C154.616 261.259 152.144 257.931 150.042 254.349C148.991 252.559 148.032 250.704 147.081 248.832C146.925 248.525 146.769 248.217 146.613 247.91C145.818 246.339 145.02 244.761 144.167 243.199L144.162 243.19L144.158 243.181C140.864 234.46 139.43 224.407 138.053 214.756C137.637 211.838 137.226 208.956 136.771 206.159L136.771 206.159C133.819 187.763 135.063 169.168 137.908 150.837L137.911 150.818L137.918 150.802C140.249 145.245 143.097 139.842 146.412 134.745L146.412 134.744C151.414 127.143 157.644 121.025 164.321 115.358C167.582 112.59 170.95 109.929 174.334 107.256L174.574 107.066C178.039 104.329 181.518 101.575 184.916 98.6763L184.917 98.6755C188.426 95.7291 191.73 92.427 194.723 88.8203C198.715 84.0132 206.119 84.117 210.005 88.9748C211.037 90.2452 212.122 91.5158 213.206 92.7357L213.211 92.7412L213.215 92.7471C215.625 96.0621 217.761 99.6178 219.837 103.181C220.23 103.857 220.622 104.533 221.012 105.208C222.682 108.093 224.339 110.954 226.097 113.673L226.097 113.674C232.146 123.138 238.556 132.347 245.329 141.353L245.329 141.354C249.315 146.7 253.524 151.863 257.737 157.032C258.496 157.962 259.254 158.893 260.012 159.825L260.034 159.852L260.042 159.887C260.924 163.879 261.723 167.896 262.522 171.91C263.834 178.503 265.144 185.088 266.815 191.541C267.864 195.573 268.955 199.602 270.046 203.632C272.397 212.315 274.751 221.009 276.694 229.771L276.696 229.782L276.697 229.793C278.042 248.979 278.358 269.638 268.247 286.429C265.861 290.39 264.157 291.812 261.848 293.707C261.811 294.064 261.862 294.376 261.998 294.69L262.003 294.7L262.006 294.711C262.253 295.635 262.895 296.515 264.094 297.056L264.096 297.057C277.09 303.147 291.888 303.451 305.139 297.869C318.388 292.288 327.929 281.479 333.243 268.48L333.243 268.48C338.04 256.904 339.124 243.754 336.339 231.569C336.314 231.471 336.289 231.384 336.263 231.296L336.263 231.295C336.237 231.206 336.211 231.115 336.184 231.011C333.242 219.429 330.257 213.768 317.884 191.657C310.242 180.15 306.989 173.468 302.235 163.705C301.065 161.303 299.804 158.714 298.365 155.82C295.332 149.724 294.14 143.63 293.426 137.46C293.169 135.233 292.974 133 292.777 130.753C292.429 126.768 292.078 122.741 291.367 118.635C290.639 115.874 289.983 113.305 289.366 110.89C287.085 101.968 285.339 95.1332 282.515 88.386C278.929 79.8185 273.605 71.3904 263.236 59.0278C252.872 48.8537 244.003 43.2782 236.245 39.9472C229.324 36.976 223.284 35.7884 217.838 34.7173C217.176 34.5873 216.524 34.4589 215.879 34.3293C215.878 34.3292 215.878 34.329 215.877 34.3289L215.875 34.3286L215.857 34.3255L215.786 34.3133L215.516 34.2671C215.283 34.2273 214.95 34.1705 214.549 34.1023C213.747 33.9658 212.673 33.7839 211.587 33.602C210.501 33.4201 209.402 33.2382 208.55 33.1018C208.123 33.0336 207.759 32.9769 207.489 32.9372C207.354 32.9174 207.243 32.9019 207.16 32.8915C207.073 32.8805 207.026 32.8763 207.012 32.8763H207.008C206.986 32.8763 206.967 32.8763 206.954 32.8759C206.947 32.8756 206.937 32.8752 206.926 32.8737C206.918 32.8726 206.891 32.8688 206.863 32.8517C206.842 32.8388 206.826 32.8223 206.814 32.8047C206.806 32.8008 206.794 32.7957 206.778 32.7893C206.72 32.7667 206.62 32.7343 206.45 32.6894C205.768 32.5097 204.025 32.1471 199.583 31.4201C186.306 30.658 175 31.4541 164.273 34.5085C153.543 37.5634 143.384 42.8795 132.406 51.1673C110.014 68.1281 103.814 92.67 101.282 118.617Z")
//     }
//   }
  
`;

export default StyledGlobal;