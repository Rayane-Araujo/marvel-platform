import styled from "styled-components";

interface CustomSelectContainerProps {
  isOpen: boolean;
}

export const MainContainer = styled.div`
  font-family: "Axiforma", sans-serif;
  position: relative;
  width: 100%;
  z-index:2;
  margin-bottom: 2vh;
  margin-left: 3%;

  @media (max-width: 1025px) {
    margin-bottom: 3vh;
  }

  @media (max-width: 600px) {
    margin-bottom: 5vh;
  }
`;

export const CustomSelectContainer = styled.div`
  position: absolute;
  border: 1px solid #ff0000;
  
  color: #ff0000;
  cursor: pointer;
  border-radius: 10px;
  width: 160px;
  padding: 10px;
  gap: 10px;
  background-color: #000;
`;

export const CustomSelectValue = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'})
  <CustomSelectContainerProps>`
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  gap: 10px;

  img {
    transition: all 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }

`;

export const CustomSelectOptions = styled.div`
  top: 100%;
  background-color: black;
  width: 100%;
  border-radius: 10px;

`;

export const CustomSelectOption = styled.div`
  width: 90%;
  color: #ff0000;
  padding: 10px;
  &:hover {
    background-color: #202020;
  }
`;