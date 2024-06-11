import { useState } from "react";
import { MainPage } from "../../components/Main";
import { BgImage } from "../../components/BgImage";
import { ButtonsCard } from "../../components/ButtonsCard";
import { MainContainer, MainContent } from "../../styles/Container";
import { Header } from "../../components/Header";

import comicsData from "../../data/comicsData";

export const Comics = () => {
  const [start, setStart] = useState(0);

  return (
    <>
      <Header />
      <MainContainer>
        <BgImage animate={false} />
        <MainContent>
          <MainPage data={comicsData} start={start} />
        </MainContent>
        <ButtonsCard data={comicsData} setStart={setStart} />
      </MainContainer>
    </>
  );
};
