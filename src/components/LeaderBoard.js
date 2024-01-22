// Overview section component - top brands
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const ImageContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  margin: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Value = styled.span`
  font-size: 1rem;
  font-weight: bold;
  padding: 5px;
`;

const Title = styled.span`
  font-size: 1rem;
  padding: 5px;
`;

const Leaderboard = (props) => {
  return (
    <Container>
      <ImageContainer>
        {/* gets the brand name from api and insert to below to access brand logo */}
        <Image
          src={`./CarsLogos/${props.value.split(" ").join("")}.svg`}
          alt={props.value}
        />
      </ImageContainer>
      <Value>{props.value}</Value>
      <Title>{props.title}</Title>
    </Container>
  );
};

export default Leaderboard;
