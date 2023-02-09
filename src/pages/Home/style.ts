import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Perfil = styled.div`
  width: 100%;
  max-width: 54rem;
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

export const Input = styled.div`
  width: 100%;
  max-width: 54rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5rem;

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    p {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  input {
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      outline: 0;
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  max-width: 54rem;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 1rem;
  padding: 2rem 0;
`;

export const Cards = styled.div`
  width: 100%;
  height: 16.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};

  .title {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      width: 80%;
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-title"]};
    }

    span {
      width: 20%;
      text-align: right;
      display: block;
      padding-top: 5px;
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  p {
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;
