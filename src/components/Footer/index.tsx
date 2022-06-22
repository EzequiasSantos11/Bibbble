import { Container } from "./styles";
import { Icon } from "../Icons";

export function Footer(){
  return(
    <Container>
      <div className="logo">
        <img src="/assets/logoFooter.svg" alt="" />
      </div>
      <div className="links">
        <div className="text">
          <span>Terms &amp; Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div className="sotials">
          <Icon.FaFacebookF/>
          <Icon.FaTwitter/>
          <Icon.FaInstagram/>
        </div>
      </div>
    </Container>
  )
}