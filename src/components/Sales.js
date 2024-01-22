// Overview section component
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import styled from "styled-components";

const SalesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;
const IconContainer = styled.span`
  color: ${(props) => props.upOrDown==="sales-up" ? "#00c853" : "#d50000"};
`;
const SalesValue = styled.span`
  color: ${(props) => props.upOrDown==="sales-up" ? "#00c853" : "#d50000"};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 5px;
`;
const Title = styled.span`
  font-size: 1rem;
  padding: 5px;
`;
//check whether the sales increased or decreased
//sales are passed from parent overview component
const compareSales = (currentValue, previousValue) => {
  if (currentValue >= previousValue) {
    return "sales-up";
  } else {
    return "sales-down";
  }
};

const Sales = (props) => {
  //responible for showing 2000 as 2k
  const numberFormat = new Intl.NumberFormat("en-US");
  const upOrDown = compareSales(props.currentValue, props.previousValue);
  return (
    <SalesContainer>
      <IconContainer upOrDown={upOrDown}>
        {upOrDown === "sales-up" && <TrendingUpIcon />}
        {upOrDown === "sales-down" && <TrendingDownIcon />}
      </IconContainer>
      <SalesValue upOrDown={upOrDown}>{numberFormat.format(props.currentValue)}k</SalesValue>
      <Title>{props.title}</Title>
    </SalesContainer>
  );
};

export default Sales;
