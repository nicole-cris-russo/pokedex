import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 380px;
  border-radius: 5px;
  background: var(--color-black);
  color: var(--color-white);
  padding: 25px;

  h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const Lista = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  /* Largura da barra de rolagem */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Fundo da barra de rolagem */
  ::-webkit-scrollbar-track-piece {
    border: none;
  }

  /* Cor do indicador de rolagem */
  ::-webkit-scrollbar-thumb:vertical,
  ::-webkit-scrollbar-thumb:horizontal {
    width: 5px;
    background: var(--color-gray);
    border-radius: 5px;
  }

  /* Cor do indicador de rolagem - ao passar o mouse */
  ::-webkit-scrollbar-thumb:vertical:hover,
  ::-webkit-scrollbar-thumb:horizontal:hover {
    background: var(--color-gray);
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    font-size: 20px;

    svg:nth-child(1) {
      margin-right: 5px;
      width: 15px;
      height: 15px;
    }

    svg:nth-child(2) {
      cursor: pointer;
      padding: 2px;
      box-sizing: content-box;

      &:hover {
        color: red;
      }
    }

    span {
      font-size: 20px;
      font-weight: 800;
    }
  }
`;
