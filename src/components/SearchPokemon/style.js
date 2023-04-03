import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 300px;
  height: 230px;
  border-radius: 5px;
  background: var(--color-white);

  h2 {
    font-size: 22px;
    color: #413f3f;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: #696969;
    font-size: 14px;
  }

  input {
    margin-bottom: 20px;
    width: 220px;
    border: none;
    height: 50px;
    background: var(--color-gray);
    outline: none;
    border-radius: 5px;
    padding-left: 15px;
    font-size: 14px;
  }

  button {
    width: 180px;
    margin: 0 auto;
    border: none;
    height: 40px;
    background: var(--color-red);
    border-radius: 5px;
    color: var(--color-white);
    font-weight: 800;
  }
`;
