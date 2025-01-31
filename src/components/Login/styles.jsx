import styled from "styled-components";
export const Holder = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #009e6c;
  justify-content: center;
  width: 40%;
  height: 100%;
  align-items: end;
  img {
    width: 20rem;
    background-color: transparent;
    margin-right: 1.5rem;
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
