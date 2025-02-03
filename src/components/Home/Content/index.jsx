/* eslint-disable react/prop-types */
import * as S from "./styles";
import suzano from "../../../assets/suzano.png";
import logo from "../../../assets/fullLogo.png";

import wood from "../../../assets/wood1.png";
import gasoline from "../../../assets/gasoline1.jpg";
import km from "../../../assets/km1.jpg";
import diesel from "../../../assets/diesel1.jpg";
import driver from "../../../assets/driver1.jpg";
import { MdAccessTime, MdOutlinePool } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";

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
          image={km}
          title="Km Percorrido"
          quantity={currentData.percorrido}
          isExpanded={isExpanded}
          dailyData={data.dados_gerais.dados_diarios}
          owner={content}
          rawData={currentData}
          footer={true}
          legend="Voltas ao mundo"
          value="123"
          icon={<FaEarthAmericas />}
        />
        <Card
          image={diesel}
          title="Diesel"
          quantity={currentData.diesel}
          isExpanded={isExpanded}
          dailyData={data.dados_gerais.dados_diarios}
          owner={content}
          rawData={currentData}
          footer={true}
          legend="Piscinas olimpicas de combustível"
          value="2"
          icon={<MdOutlinePool />}
        />
        <Card
          image={driver}
          title="Condutores Treinados"
          quantity={currentData.condutores_treinados.total}
          isExpanded={isExpanded}
          dailyData={currentData.condutores_treinados.dados_diarios}
          owner={content}
          rawData={currentData}
          footer={true}
          legend="Horas trabalhadas"
          value="15268"
          icon={<MdAccessTime />}
        />
        <Card
          image={wood}
          title="Toneladas Transportadas"
          quantity={currentData.toneladas_transportadas}
          isExpanded={isExpanded}
          dailyData={data.dados_gerais.dados_diarios}
          owner={content}
          rawData={currentData}
          footer={true}
          legend="Baixa DM/hr"
          value="26"
          icon={<FaTruck />}
        />
        <Card
          image={gasoline}
          title="Média Combustível"
          quantity={currentData.media_combustivel}
          isExpanded={isExpanded}
          dailyData={data.dados_gerais.dados_diarios}
          owner={content}
          rawData={currentData}
          footer={true}
          legend="Tempo médio de viagem/hr"
          value="8"
          icon={<LuTimerReset />}
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
