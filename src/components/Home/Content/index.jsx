/* eslint-disable react/prop-types */
import * as S from "./styles";
import suzano from "../../../assets/suzano.png";
import logo from "../../../assets/fullLogo.png";

import wood from "../../../assets/wood1.png";
import gasoline from "../../../assets/gasoline1.jpg";
import km from "../../../assets/km1.jpg";
import diesel from "../../../assets/diesel1.jpg";
import driver from "../../../assets/driver1.jpg";

import { Card } from "./Card";

export const Content = ({ content, data, isExpanded }) => {
  const renderContent = () => {
    if (!data) return null;

    const currentData =
      content === "Geral" ? data.dados_gerais : data.instrutores[content];
    if (!currentData) return null;

    return (
      <S.CardHolder>
        <Card
          image={wood}
          title="Toneladas Transportadas"
          quantity={currentData.toneladas_transportadas}
          isExpanded={isExpanded}
          dailyData={data.dados_gerais.dados_diarios}
          owner={content}
          rawData={currentData}
        />
        <Card
          image={gasoline}
          title="Média Combustível"
          quantity={currentData.media_combustivel}
          isExpanded={isExpanded}
          dailyData={data.dados_gerais.dados_diarios}
          owner={content}
          rawData={currentData}
        />
        <Card
          image={km}
          title="Km Percorrido"
          quantity={currentData.percorrido}
          isExpanded={isExpanded}
          dailyData={data.dados_gerais.dados_diarios}
          owner={content}
          rawData={currentData}
        />
        <Card
          image={diesel}
          title="Diesel"
          quantity={currentData.diesel}
          isExpanded={isExpanded}
          dailyData={data.dados_gerais.dados_diarios}
          owner={content}
          rawData={currentData}
        />
        <Card
          image={driver}
          title="Condutores Treinados"
          quantity={currentData.condutores_treinados.total}
          isExpanded={isExpanded}
          dailyData={currentData.condutores_treinados.dados_diarios}
          owner={content}
          rawData={currentData}
        />
      </S.CardHolder>
    );
  };

  return (
    <S.Holder>
      <img
        src={suzano}
        alt="s"
        style={{
          position: "fixed",
          top: "-10px",
          right: "15px",
          width: "5rem",
        }}
      />
      <img
        src={logo}
        alt="s"
        style={{
          position: "fixed",
          top: "20px",
          right: "120px",
          width: "6rem",
        }}
      />
      <span
        style={{
          position: "fixed",
          top: "5px",
          right: "99px",
          fontSize: "2.5rem",
          color: "lightgray",
        }}
      >
        |
      </span>
      {!isExpanded && (
        <S.Title>
          <h1>{`Painel Operacional`}</h1>
          <h2> ▬ {content}</h2>
        </S.Title>
      )}
      {isExpanded && (
        <S.Title>
          <h1> </h1>
          <h2> </h2>
        </S.Title>
      )}

      {renderContent()}
    </S.Holder>
  );
};
