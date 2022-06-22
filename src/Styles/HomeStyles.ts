import styled from "styled-components";
import { colors } from "./globals";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .wrapper{
    display: grid;
    width: 90%;
    margin: 0 auto;
    justify-content: center;
    padding: 40px 0;
    grid-template-columns: repeat(auto-fit, minmax(259px, 1fr));
    @media (max-width: 800px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
      gap: 10px;
    }
  }
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    margin-top: -100px;
    h1{
      font-size: 2rem;
      color: #000;
    }
  }
`;
