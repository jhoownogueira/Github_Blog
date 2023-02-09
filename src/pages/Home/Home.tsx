import { Cards, ContainerCards, HomeContainer, Input, Perfil } from "./style";
import photoPefil from "../../assets/jhoow.jpg";
import iconGithub from "../../assets/icons/github.svg";
import iconCompany from "../../assets/icons/company.svg";
import iconFollowers from "../../assets/icons/followers.svg";
import iconOpen from "../../assets/icons/open.svg";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface ProfileProps {
  name: string;
  avatar: string;
  username: string;
  bio: string;
  url: string;
  company: string;
  followers: string;
}

interface IssuesProps {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export function Home() {
  const [infoProfile, setInfoProfile] = useState<ProfileProps>();
  const [issues, setIssues] = useState<IssuesProps[]>([]);

  useEffect(() => {
    loadProfileGit();
    loadIssues();
  }, []);

  async function loadProfileGit() {
    const response = await api.get("/users/jhoownogueira").then((response) => {
      let { name, avatar_url, login, bio, html_url, company, followers } =
        response.data;
      setInfoProfile({
        name: name,
        avatar: avatar_url,
        username: login,
        bio: bio,
        url: html_url,
        company: company,
        followers: followers,
      });
    });
  }

  async function loadIssues() {
    const response = await api
      .get("/repos/rocketseat-education/reactjs-github-blog-challenge/issues")
      .then((response) => {
        setIssues(response.data);
      });
  }

  return (
    <HomeContainer>
      <Perfil>
        <div className="photo">
          <img src={infoProfile?.avatar} />
        </div>
        <div className="info">
          <div className="title">
            <h1>{infoProfile?.name}</h1>
            <a href={infoProfile?.url} target="_blank">
              GITHUB
              <img src={iconOpen} />
            </a>
          </div>
          <p>{infoProfile?.bio}</p>
          <div className="info_perfil">
            <a href={infoProfile?.url} target="_blank">
              <img src={iconGithub} />
              <span>{infoProfile?.username}</span>
            </a>
            <a href="">
              <img src={iconCompany} />
              <span>{infoProfile?.company}</span>
            </a>
            <a href="">
              <img src={iconFollowers} />
              <span>{infoProfile?.followers} Seguidores</span>
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
      <ContainerCards>
        {issues.map((issue) => {
          return (
            <Cards key={issue.id}>
              <div className="title">
                <h3>J{issue.title}</h3>
                <span>
                  {formatDistanceToNow(new Date(issue.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </div>
              <p>{issue.body}</p>
            </Cards>
          );
        })}
      </ContainerCards>
    </HomeContainer>
  );
}
