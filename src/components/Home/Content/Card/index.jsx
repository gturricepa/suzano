/* eslint-disable react/prop-types */
import { useState } from "react";
import * as S from "./styles";
import CountUp from "react-countup";
import logoCepa from "../../../../assets/fullLogo.png";
import { Modal } from "antd";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Line,
} from "recharts";
import suzano from "../../../../assets/suzano2.svg";

export const Card = ({
  image,
  title,
  quantity,
  isExpanded,
  dailyData,
  rawData,
  owner,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    if (!isExpanded) {
      setIsModalVisible(true);
    }
  };

  const handleCancel = (event) => {
    event.stopPropagation();
    setIsModalVisible(false);
  };

  const chartData = dailyData
    ? Object.entries(dailyData).map(([day, data]) => ({
        day,
        ...data,
      }))
    : [];

  let filteredChartData = [];

  if (owner === "Geral") {
    filteredChartData = chartData.map((data) => ({
      day: data.day,
      value:
        title === "Condutores Treinados"
          ? data.aprovados || 0
          : title === "Km Percorrido"
          ? data.percorrido || 0
          : title === "Média Combustível"
          ? data.media_combustivel || 0
          : title === "Diesel"
          ? data.diesel || 0
          : data.toneladas_transportadas || 0,
    }));
  } else {
    const instrutorData = rawData;

    filteredChartData = chartData.map((data) => {
      const dailyDataForInstructor =
        instrutorData.dados_diarios[data.day] || {};
      return {
        day: data.day,
        value:
          title === "Condutores Treinados"
            ? dailyDataForInstructor.aprovados || 0
            : title === "Km Percorrido"
            ? dailyDataForInstructor.percorrido || 0
            : title === "Média Combustível"
            ? dailyDataForInstructor.media_combustivel || 0
            : title === "Diesel"
            ? dailyDataForInstructor.diesel || 0
            : dailyDataForInstructor.toneladas_transportadas || 0,
      };
    });
  }

  const validChartData = filteredChartData.filter((data) => data.value > 0);

  const pieData =
    title === "Condutores Treinados"
      ? [
          {
            name: "Aprovados",
            value: rawData.condutores_treinados.aprovados || 0,
          },
          {
            name: "Reprovados",
            value: rawData.condutores_treinados.reprovados || 0,
          },
        ]
      : [];

  const COLORS = ["#82ca9d", "#ff7300"];

  return (
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
        <CountUp
          start={0}
          end={quantity}
          duration={1}
          decimals={2}
          decimal="."
        />
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
        <p>Quantidade Total: {quantity}</p>
        <h4>Disposição dos Dados por Dia:</h4>
        {title === "Condutores Treinados" ? (
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        ) : validChartData.length > 0 ? (
          <LineChart width={600} height={300} data={validChartData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="value" stroke="#004da6" />
          </LineChart>
        ) : (
          <p>Nenhum dado disponível.</p>
        )}
        <img src={logoCepa} alt="logo" style={{ width: "5rem" }} />
      </Modal>
    </S.Holder>
  );
};
