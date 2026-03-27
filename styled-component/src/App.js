import styled from "styled-components";
import { useState } from "react";

const CardContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const Card = styled.div`
  padding: 20px;
  width: 150px;
  border-radius: 12px;
  border: 2px solid ${({ selected }) => (selected ? "#4cfa50" : "#ddd")};
  background-color: ${({ selected }) => (selected ? "#f0fff4" : "white")};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  margin: 0;
`;

export default function App() {
  const [selected, setSelected] = useState(null);

  const items = ["Basic", "Pro", "Premium"];

  return (
    <CardContainer>
      {items.map((item, index) => (
        <Card
          key={index}
          selected={selected === index}
          onClick={() => setSelected(index)}
        >
          <Title>{item}</Title>
        </Card>
      ))}
    </CardContainer>
  );
}
