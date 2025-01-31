import styled from "styled-components";

export const Form = styled.form`
  width: 50rem;
  /* box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); */
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  span {
    margin-top: 1rem;
    color: #9e0025;
    font-size: 0.7rem;
  }

  img {
    width: 10rem;
    margin: 0;
    padding: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    h1 {
      display: flex;
      color: #009e6c;
      font-weight: 100;
      font-size: 4rem;
      margin: 0;
      padding: 0;
    }
    margin-bottom: 3rem;
    h2 {
      margin: 0;
      padding: 0;
      font-size: 2rem;
      font-weight: 100;
      color: #242424;
    }
  }
`;

export const Input = styled.input`
  width: 35rem;
  padding: 0.8rem;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #009e6c;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  background-color: #f8f8f8;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 0.8rem;
  width: 37rem;
  background-color: #009e6c;
  color: #f5f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
  }
`;
