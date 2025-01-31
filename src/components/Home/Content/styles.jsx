import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  h1 {
    display: flex;
    justify-content: center;
    font-weight: 100;
    font-size: 2.5rem;
  }
  h2 {
    font-weight: 100;
    font-size: 2.5rem;
    color: #009e6c;
    margin-left: 0.8rem;
  }
`;

export const CardHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  align-items: center;
`;
