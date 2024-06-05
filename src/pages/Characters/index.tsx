import { useState } from "react";
import { MainContainer } from "../../styles/Container";
import { ButtonsCard } from "../../components/ButtonsCard";
import { MainPage } from "../../components/Main";
import { BgImage } from "../../components/BgImage";
import { Header } from "../../components/Header";

import charactersData from "../../data/charactersData";

export const Characters = () => {
  const [start, setStart] = useState(0);
  return (
    <>
      <Header />
      <MainContainer>
        <BgImage animate={false} />

        <MainPage data={charactersData} start={start} />

        <ButtonsCard data={charactersData} setStart={setStart} />
      </MainContainer>
    </>
  );
};
