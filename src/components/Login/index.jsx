import * as S from "./styles";
import suzano from "../../assets/suzano2.svg";
import { Form } from "../Login/Form";
export const Login = () => {
  return (
    <S.Holder>
      <S.LeftSide>
        <img src={suzano} alt="suzano" />
      </S.LeftSide>
      <S.RightSide>
        <Form />
      </S.RightSide>
    </S.Holder>
  );
};
