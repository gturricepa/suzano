import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ isExpanded }) => (isExpanded ? "14rem" : "14rem")};
  height: ${({ isExpanded }) => (isExpanded ? "88%" : "27rem")};
  border: 0.1px solid lightgray;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  cursor: ${({ isExpanded }) => (isExpanded ? "default" : "pointer")};
  transition: box-shadow 0.3s ease, transform 0.3s ease, filter 0.3s ease,
    font-weight 0.2s ease, width 0.3s ease, height 0.3s ease;

  &:hover {
    ${({ isExpanded }) =>
      !isExpanded &&
      `
      font-weight: 400;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
      
      img {
        filter: brightness(0.1);
      }
    `}
  }

  background-color: #fefcfc;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4);
  transition: filter 0.3s ease;

  &:hover {
    ${({ isExpanded }) =>
      isExpanded &&
      `
      filter: brightness(0.1);
    `}
  }
`;

export const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 2rem;
`;

export const Price = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-weight: 400;
  font-size: 1.5rem;
  display: ${({ isExpanded }) => (isExpanded ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  opacity: ${({ isExpanded }) => (isExpanded ? 0 : 1)};
  transition: opacity 0.3s ease,
    display 0s linear ${({ isExpanded }) => (isExpanded ? "0.5s" : "0s")};

  p {
    font-size: 0.9rem;
    display: flex;
    margin-right: 2rem;
  }
`;
