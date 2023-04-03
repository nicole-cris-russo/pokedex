import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;

  h1 {
    font-size: 38px;
    font-weight: 500;
  }

  h1 span {
    font-size: 38px;
    font-weight: 800;
    color: var(--color-red);
  }

  svg {
    color: var(--color-black);
    width: 45px;
    height: 45px;
    margin-left: 5px;
  }
`;
