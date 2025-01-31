import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Holder = styled.div`
  width: ${(props) => (props.expanded ? "20rem" : "6rem")};
  height: 100vh;
  background-color: #009e6c;
  transition: width 0.3s ease;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 2.3rem;
    cursor: pointer;
  }
`;

export const Master = styled.div`
  display: flex;
  h1 {
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: 400;
  }
`;

export const SideContent = styled.div`
  display: flex;
  color: #f5f1f1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 1.6s ease;
  h2 {
    font-weight: 400;
    width: 100%;
    font-size: 2rem;
    display: flex;
    justify-self: center;
    align-self: center;
    justify-content: center;
  }

  p {
    padding: 0.4rem;
    font-size: 1.3rem;
    transition: color 0.3s ease, background-color 0.3s ease, padding 0.3s ease;
    font-weight: 400;
    &:hover {
      cursor: pointer;
      color: #009e6c;
      background-color: #f5f1f1;
    }
    span {
      font-size: 1.2rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f5f1f1;
  animation: ${fadeIn} 1.6s ease;

  img {
    margin-right: 2rem;
  }
`;
