
import { HomeContainer, Input, Perfil } from "./style";
import photoPefil from "../../assets/jhoow.jpg";
import iconGithub from "../../assets/icons/github.svg";
import iconCompany from "../../assets/icons/company.svg";
import iconFollowers from "../../assets/icons/followers.svg";
import iconOpen from "../../assets/icons/open.svg";

export function Home() {
  return (
    <HomeContainer>
      <Perfil>
        <div className="photo">
          <img src={photoPefil} />
        </div>
        <div className="info">
          <div className="title">
          <h1>Jhonata Nogueira</h1>
          <a href="">
            GITHUB
            <img src={iconOpen} />
          </a>
          </div>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <div className="info_perfil">
            <a href="">
            <img src={iconGithub} />
            <span>jhoownogueira</span>
            </a>
            <a href="">
            <img src={iconCompany} />
            <span>DVA Serviços</span>
            </a>
            <a href="">
            <img src={iconFollowers} />
            <span>32 Seguidores</span>
            </a>
          </div>
        </div>
      </Perfil>
      <Input>
      <div className="title">
      <p>Publicações</p>
      <span>6 publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
      </Input>
    </HomeContainer>
  );
}
