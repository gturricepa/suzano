/* eslint-disable react/prop-types */
import { useState } from "react";
import * as S from "./styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import CountUp from "react-countup";
import logoCepa from "../../../../assets/fullLogo.png";
import { Modal } from "antd";
import { FooterCard } from "../FooterCard";

import suzano from "../../../../assets/suzano2.svg";

export const Card = ({
  image,
  title,
  isExpanded,
  data,
  legend,
  icon,
  footer,
  owner,
  value,
  rawData,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    if (!isExpanded) {
      setIsModalVisible(true);
    }
  };

  function obterValorPorChave(chave) {
    const mapeamento = {
      "Km Percorrido": "percorrido",
      Diesel: "diesel",
      "Toneladas Transportadas": "toneladas_transportadas",
      "Média Combustível": "media_combustivel",
    };

    return mapeamento[chave];
  }

  const handleCancel = (event) => {
    event.stopPropagation();
    setIsModalVisible(false);
  };

  const renderModalContent = () => {
    if (title === "Condutores Treinados") {
      const nomes = rawData.condutores_treinados?.nomes || [];
      return (
        <ul>
          {nomes.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      );
    }

    const chartData = rawData.dados_diarios;
    const chave = obterValorPorChave(title);
    const dataForChart = Object.entries(chartData).map(([dia, dados]) => ({
      dia: `Dia ${dia}`,
      valor: dados[chave],
    }));

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dataForChart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="valor"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <S.Master>
      <S.Holder isExpanded={isExpanded} onClick={showModal}>
        <S.Image src={image} alt={title} />
        <S.Title>{title}</S.Title>

        {isExpanded && (
          <img
            src={suzano}
            alt="suzano"
            style={{
              position: "absolute",
              bottom: "1rem",
              width: "7rem",
            }}
          />
        )}

        <S.Price isExpanded={isExpanded}>
          <p>Total</p>
          <span>{data}</span>
        </S.Price>

        <Modal
          title={`${title} - ${owner}`}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={800}
          bodyStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {title === "Condutores Treinados" ? (
            <></>
          ) : (
            <p>Disposição dos dados por dia. Jan/2025</p>
          )}
          {renderModalContent()}
          <img src={logoCepa} alt="logo" style={{ width: "5rem" }} />
        </Modal>
      </S.Holder>
      {footer && !isExpanded && (
        <FooterCard legend={legend} value={value} icon={icon} />
      )}
    </S.Master>
  );
};
