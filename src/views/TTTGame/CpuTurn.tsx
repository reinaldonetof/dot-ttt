import React from "react";
import { useCpuTurn } from "../../hooks/useCpuTurn";

// import { Container } from './styles';

const CpuTurn: React.FC = () => {
  useCpuTurn();
  return null;
};

export default CpuTurn;
