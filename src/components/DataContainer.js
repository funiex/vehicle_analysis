//Container for Charts displayed on dashboard and provides green title bar
import React from 'react';
import styled from 'styled-components';
import { Paper } from '@mui/material';

const Container = styled.div`
  flex-direction: column;
  box-sizing: border-box;
  margin: 0.5rem 0;
`
const ChartContainer = styled.div`
  background-color: #fff;

`

const ContainerHead = styled.div`
    display: flex;
    //GREEN_BG_COLOR in consts/colors
    background-color: #14C38E;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin:auto;
    padding: auto;
`
const Title = styled.p`
    color: white;
    font-size: larger;
    font-weight: bolder;
    text-align: center;
    padding: 0 1rem;
    align-items: center;
`

export const DataContainer = (props) => {
  return (
    <Container>
      <Paper elevation={3}>
          <ContainerHead>
              <Title>
                {props.title}
              </Title>
          </ContainerHead>
          <ChartContainer>
              {props.queryComponent}
          </ChartContainer> 
      </Paper>
    </Container>
  )
}
