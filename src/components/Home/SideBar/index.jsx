/* eslint-disable react/prop-types */
import * as S from "./styles";
import suzano2 from "../../../assets/suzano2.svg";
import logo from "../../../assets/logonegativo.png";
import { useNavigate } from "react-router-dom";
import {
  CloseCircleFilled,
  LoginOutlined,
  MenuUnfoldOutlined,
  MoreOutlined,
} from "@ant-design/icons";

export const SideBar = ({ onSelect, expanded, toggleSidebar }) => {
  const navigate = useNavigate();
  const handleSelect = (name) => {
    onSelect(name);
    toggleSidebar();
  };

  const handleLogout = () => {
    localStorage.removeItem("logged");
    navigate("/");
  };

  return (
    <S.Master>
      <S.Holder expanded={expanded}>
        {expanded ? (
          <CloseCircleFilled
            onClick={toggleSidebar}
            style={{ marginTop: "1rem" }}
          />
        ) : (
          <MenuUnfoldOutlined
            onClick={toggleSidebar}
            style={{ marginTop: "1rem" }}
          />
        )}
        {expanded && (
          <S.SideContent>
            <S.Title>
              <h2>
                Master Drivers{" "}
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "12%", marginLeft: "1rem" }}
                />
              </h2>
            </S.Title>
            <p onClick={() => handleSelect("Geral")}>
              <MoreOutlined style={{ marginRight: "0.5rem" }} />
              Geral
            </p>
            <p onClick={() => handleSelect("Marcos Lima")}>
              <MoreOutlined style={{ marginRight: "0.5rem" }} />
              Marcos Lima
            </p>
            <p onClick={() => handleSelect("Rafael Vitor")}>
              <MoreOutlined style={{ marginRight: "0.5rem" }} />
              Rafael Vitor
            </p>
            <p onClick={() => handleSelect("Ismael")}>
              <MoreOutlined style={{ marginRight: "0.5rem" }} />
              Ismael
            </p>
            <p onClick={() => handleSelect("Cristiano Vitor")}>
              <MoreOutlined style={{ marginRight: "0.5rem" }} />
              Cristiano Vitor
            </p>
            <p onClick={() => handleSelect("Marcelo Paiva")}>
              <MoreOutlined style={{ marginRight: "0.5rem" }} />
              Marcelo Paiva
            </p>
          </S.SideContent>
        )}
        {!expanded && (
          <img src={suzano2} alt="suzano" style={{ width: "5rem" }} />
        )}
        <LoginOutlined
          style={{ marginBottom: "1rem" }}
          onClick={handleLogout}
        />
      </S.Holder>
    </S.Master>
  );
};
