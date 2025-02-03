import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  width: 80%;
  border: 1px solid lightgray;
  height: 20%;
  margin-top: 1rem;
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fdfbf9;
  box-sizing: border-box;
  svg {
    font-size: 1.8rem;
    margin-left: 0.7rem;
    margin-top: 0.7rem;
  }
  span {
    display: flex;
    /* justify-content: center */
    font-size: 1.8rem;
    font-weight: 400;
    justify-content: center;
  }
  p {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 0.85rem;
    /* justify-content: center */
  }
`;
