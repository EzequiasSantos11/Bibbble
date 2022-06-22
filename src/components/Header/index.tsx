import { useState } from "react";
import { Icon } from "../Icons";
import { Container } from "./styles";


export function Header(){
  const [openInput, setInput] = useState(false);
  const [openMenu, setMenu] = useState(false);

  return(
    <Container>
      <div className="iconMenu" onClick={()=>setMenu(!openMenu)}>
        <Icon.AiOutlineMenu/>
      </div>
      <img src="/assets/logo.svg" alt="" />
      <nav>
        <ul className={openMenu ? "open": "close"}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
        </ul>
        <div  className="search">
          <input className={openInput ? "open":""} type="text" />
          <Icon.BiSearch onClick={()=>setInput(!openInput)}/>
        </div>
      </nav>
    </Container>
  )
}