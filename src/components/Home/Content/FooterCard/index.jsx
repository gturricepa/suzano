import * as S from "./styles";
export const FooterCard = ({ legend, value, icon }) => {
  return (
    <S.Holder>
      {icon}
      <span>{value}</span>
      <p>{legend}</p>
    </S.Holder>
  );
};
