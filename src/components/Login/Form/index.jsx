import * as S from "./styles";
import logo from "../../../assets/fullLogo.png";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const correctEmail = import.meta.env.VITE_USER;
    const correctPassword = import.meta.env.VITE_PASS;

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("logged", "true");
      setError("");
      navigate("/home");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <div>
        <h1>VISÃO GERENCIAL</h1>
        <h2>Simples Nacional Limeira</h2>
      </div>
      <div
        style={{
          height: "12rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <S.Input
          text="email"
          placeholder="Usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.Button>Login</S.Button>
      </div>
      <img src={logo} alt="cepa logo" />
      {error && <span>{error}</span>}
    </S.Form>
  );
};
