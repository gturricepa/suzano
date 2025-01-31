import * as S from "./styles";
import suzano2 from "../../assets/suzano2.svg";
import { useNavigate } from "react-router-dom";
export const NotFound = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <S.Holder>
      <S.LeftSide>
        <img src={suzano2} alt="logo"></img>
      </S.LeftSide>
      <S.RightSide>
        <h1>Página não encontrada...</h1>
        <S.Button onClick={handleGoHome}>Voltar</S.Button>
      </S.RightSide>
    </S.Holder>
  );
};
