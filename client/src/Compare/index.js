import React from 'react';
import styled from 'styled-components';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import PriceChart from './PriceChart';
import CompareButton from './CompareButton';

const ChartGrid = styled.div`
  display: grid; 
  margin-top: 20px; 
  grid-gap: 15px; 
  grid-template-columns: 1fr; 
`
const DivStyle = styled.div`
  display: grid; 
  padding: 20px; 
  grid-template-columns: 1fr; 
  background-color:black;

`

export default function(){
  return <Page name="compare">
    <DivStyle>
      Select the coins you wish to compare:
      <PriceGrid/>
      <CompareButton />
    </DivStyle>
    <ChartGrid>
      <PriceChart/>
    </ChartGrid>
    
  </Page>
}
