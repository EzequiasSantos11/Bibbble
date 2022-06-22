import styled from "styled-components";
import { colors } from "../../Styles/globals";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 416px;
  width: 90%;
  max-width: 259px;
  margin: 20px auto;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 0 4px rgba(0, 0,0,0.5);
  img{
    height: 224px;
    border-radius: 4px;

  }
  .textBook{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 12px;
    h1{
      font-size: 16px;
      font-family: "Inter" sans-serif;
      color: #19191D;
      margin-bottom: 6px;
    }
    h2, p{
      font-size: 14px;
      font-family: 'Inter' sans-serif;
      margin-bottom: 8px;
      color: ${colors.textGray};
    }
    .details{
      display: flex;
      margin-top: 12px;
      align-items: center;
      justify-content: space-between;
      button{
        color: ${colors.textBlue};
        background: transparent;
        border: 1px solid ${colors.textBlue};
        border-radius: 4px;
        height: 32px;
        padding: 2px 20px;
        cursor: pointer;
      }
      span{
        color: ${colors.textBlue};
      }
    }
  }
  @media (max-width: 800px){
    width: 100%;
    max-width: 100%;
    height: 350px;
    padding: 8px;
    margin: 10px 0;
    img{
      height: 140px;
    }
    .textBook{
      h1{
        font-size: 14px;
      }
      h2, p{
        font-size: 12px;
      }
      .details{
        button{
          height: 24px;
          font-size: 12px;
          padding: 2px 10px;
        }
        span{
          font-size: 12px;
        }
      }
    }
  }
`;