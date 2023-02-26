import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
  position: static;

  /* background-color: red; */

  @media (max-width: 375px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-right: 5px;
  }

  .buton {
    width: 200px;
    background-color: var(--rose-water);
    padding: 10px;
    margin: 0 auto;
    margin-right: -80%;
    margin-bottom: 20px;
    border-radius: 8px;
    border-style: dotted;
    border: 20px red;
    color: white;

    :hover {
      background-color: var(--hot-pink);
    }
  }
`;

export const LeftContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 375px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-right: 5px;
  }
`;

export const Button = styled.button`
  display: flex;
`;
export const InputName = styled.div`
  width: 300px;

  border: 1px solid #444343;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  padding: 30px;
  margin: 0 auto;
`;
