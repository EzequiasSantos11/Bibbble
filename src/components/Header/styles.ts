import styled from "styled-components";
import { colors } from "../../Styles/globals";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 99px;
  width: 100%;
  box-shadow: 0 0  2px #cccc;
  .iconMenu{
    display: none;
  }
  img{
    height: 32px;
  }
  nav, ul, .search{
    display: flex;
    align-items: center;
  }
  nav{
    ul {
      gap: 30px;
      li a{
      color: ${colors.textBlack};
      }
    }
    .search{
      position: relative;
      content: "";
      height: 24px;
      width: 130px;
      margin-left: 26px;
      input{
        display: flex;
        height: 100%;
        width: 100%;
        border-radius: 5px;
        width: .1px;
        opacity: 0;
        transition: all .4s ease;
        padding-left: 20px;
      }
      .open{
        width: 100%;
        transition: all .4s ease;
        opacity: 1;
      }
      svg{
        position: absolute;
        left: 5px;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 800px){
    justify-content: space-between;
    padding: 0 20px;
    padding-bottom: 15px;
    .iconMenu{
      display: flex;
      height: 100%;
      align-items: center;
      svg{
        font-size: 2rem;
       
      }
    }
    nav {
      .search {
        position: initial;
        align-items: center;
        justify-content: center;
        margin: 0;
        width: 40px;
        height: 40px;
        svg{
          position: initial;
          height: 80%;
          width: 80%;
        }
        input{
          position: absolute;
          top: 75px;
          height: 32px;
          width: 50%;
          left: 0;
          text-align: center;
        }
      }
    }
    nav ul{
      flex-direction: column;
      position: absolute;
      justify-content: center;
      align-items: flex-start;
      padding-left: 50px;
      top: 99px;
      left: -100%;
      background: #FFF;
      width: 50%;
      height: 50%;
      border-bottom-right-radius: 5px;
      box-shadow: 0 0 2px rgba(0,0,0,0.4);
      transition: all .6s ease-in-out;
      &.open{
        left: 0;
      }
    }
    
  }
`;