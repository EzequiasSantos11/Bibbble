import styled from "styled-components";
import { colors } from "../../Styles/globals";


export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 270px;
  background: ${colors.footerColor};
  color: #FFF;
  .logo{
    display: flex;
    height: 60px;
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid rgba(255, 255, 255, .10);
    img{
      height: 32px;
    }
  }
  .links{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 60px;
    width: 80%;
    margin: 0 auto;
    .text{
      display: flex;
      font-size: 15px;
      font-family: 'DM sans' sans-serif;
      font-weight: 400;
      gap: 40px;
    }
    .sotials{
      display: flex;
      gap: 40px;
      svg{
        font-size: 15px;
      }
    }
    @media (max-width: 800px){
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin-top: 20px;
      .details{
        margin-top: 20px;
      }
    }
  }
`;