import styled from "styled-components";

interface CardDetailsProps {
  index: number;
  isMovie: boolean;
}

export const CardDetailsContainer = styled.div`

  color: #ffff;
  width: 100%;
  height: 439px;
  background: linear-gradient(to bottom, red, rgba(78, 0, 0, 1));
  row-gap: 40px;
`;

export const CardDetailsContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isMovie",
})<CardDetailsProps>`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-direction: column;
  width: calc(55%);
  margin: 60px 0px 20px 40px;
  width: 55%;
  color: #ffff;
  position: absolute;
  right: ${({ index }) => (index === 0 ? "0" : "auto")};
  row-gap: 20px;

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
  }

  h3 {
    font-size: 20px;
    color: #ffff;
    font-weight: 500;
    line-height: 1;
    margin-top: 10px;
  }

  li {
    font-size: 16px;
    color: #ffff;
    font-weight: 100;
    list-style: none;
  }

  //Imagem da estrela
  img {
    width: 25px;
    height: 25px;
    margin-top: 10px;
  }

  @media (max-width: 1025px) {
    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 20px;
    }

    li {
      font-size: 16px;
    }

    img {
      width: 25px;
      height: 25px;
      margin-top: 5px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    h1 {
      font-size: 25px;
    }

    h2 {
      font-size: 18px;
    }

    li {
      font-size: 14px;
    }

    img {
      width: 20px;
      height: 20px;
      margin-top: 5px;
      margin-right: 5px;
    }
  }
`;

export const BtnClose = styled.img`
  z-index: 10;
  position: absolute;
  cursor: pointer;
  bottom: 20px;
  right: 25px;
  width: 30px;
  height: 30px;

  @media (max-width: 600px) {
    width: 25px;
    height: 25px;
    bottom: 20px;
    right: 20px;
  }
`;
