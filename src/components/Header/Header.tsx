import { HeaderContainer } from "./style";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={ logoImg }/>
    </HeaderContainer>
  )
}