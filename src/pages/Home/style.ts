import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Perfil = styled.div`
  width: 54rem;
  height: 13.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  margin-top: -4rem;

  .photo {
    min-width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    overflow: auto;
    img {
      width: 9.25rem;
    }
  }

  .info {
    width: 100%;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-weight: 700;
        font-size: 1.5rem;
        color: ${(props) => props.theme["base-title"]};
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 100%;
        color: ${(props) => props.theme.blue};
      }
    }
    p {
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme["base-text"]};
      margin: 0.5rem 0 1.5rem;
    }
    .info_perfil {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5rem;

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        color: ${(props) => props.theme["base-subtitle"]};
      }
    }
  }
`;
