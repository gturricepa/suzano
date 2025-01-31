import { useState } from "react";
import { Content } from "./Content";
import { SideBar } from "./SideBar";
import * as S from "./styles";
import json from "../../data.json";

export const Home = () => {
  const [content, setContent] = useState("Geral");
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <S.Holder>
      <SideBar
        onSelect={setContent}
        expanded={expanded}
        toggleSidebar={toggleSidebar}
      />
      <Content content={content} data={json} isExpanded={expanded} />
    </S.Holder>
  );
};
