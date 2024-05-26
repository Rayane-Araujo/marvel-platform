import bgHome from "../../assets/images/background.png";
import { ImageContainer } from "./styled";

interface ImageBgProps {
  animate: boolean;
}

export const BgImage = ({ animate }: ImageBgProps) => {
  return (
    <ImageContainer animate={animate}>
      <img src={bgHome} alt="Imagem de fundo do site" />
    </ImageContainer>
  );
};