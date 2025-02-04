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

    return (
      <S.CardHolder>
        <Card
          isExpanded={isExpanded}
          data={data.instrutores[content].percorrido}
          image={km}
          title="Km Percorrido"
          legend="Voltas ao mundo"
          value={data.instrutores[content].volta_ao_mundo}
          footer={true}
          icon={<FaEarthAmericas />}
          owner={content}
          rawData={data.instrutores[content]}
        />
        <Card
          isExpanded={isExpanded}
          image={diesel}
          title="Diesel"
          data={data.instrutores[content].diesel}
          footer={true}
          value={data.instrutores[content].piscina}
          legend="Piscinas olimpicas de combustível"
          icon={<MdOutlinePool />}
          owner={content}
          rawData={data.instrutores[content]}
        />
        <Card
          isExpanded={isExpanded}
          image={driver}
          title="Condutores Treinados"
          data={data.instrutores[content].condutores_treinados.total}
          footer={true}
          legend="Horas trabalhadas"
          value={data.instrutores[content].horas}
          icon={<MdAccessTime />}
          owner={content}
          rawData={data.instrutores[content]}
        />
        <Card
          isExpanded={isExpanded}
          image={wood}
          title="Toneladas Transportadas"
          data={data.instrutores[content].toneladas_transportadas}
          footer={true}
          value={data.instrutores[content].dm}
          legend="Baixa DM/hr"
          icon={<FaTruck />}
          owner={content}
          rawData={data.instrutores[content]}
        />
        <Card
          isExpanded={isExpanded}
          image={gasoline}
          title="Média Combustível"
          data={data.instrutores[content].media_combustivel}
          footer={true}
          legend="Tempo médio de viagem/hr"
          value={data.instrutores[content].tempo_medio_horas}
          icon={<LuTimerReset />}
          owner={content}
          rawData={data.instrutores[content]}
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
