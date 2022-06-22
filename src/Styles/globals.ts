import {createGlobalStyle} from "styled-components";


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    input, button, textarea{
      outline: none;
    }
  }
`;

export const colors = {
  footerColor: "#1E2833",
  textWhite: "#FFF",
  textBlack: "#000",
  textBlue: "#2264D1",
  textGray: "#787885"
}