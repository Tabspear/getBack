import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif;   
}
#root{
    margin:0 auto;

}

body {
    --gradient-from-color: #2b2a28;
  --gradient-to-color: rgba(13, 12, 12, 0);
  --gradient-color-stops: var(--gradient-from-color), var(--gradient-to-color);
  background-image: linear-gradient(to left, var(--gradient-color-stops));
}
`;
// background: linear-gradient(to bottom, #050505, #FFFFFF);
// background: linear-gradient(to right, #d1c9be, #7a7a7a);
// e29f51
