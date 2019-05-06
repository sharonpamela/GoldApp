import React from 'react';
import styled from 'styled-components';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import PriceChart from './PriceChart';
import CompareButton from './CompareButton';
import SelectedCoins from './SelectedCoins';

const ChartGrid = styled.div`
  display: grid; 
  margin-top: 20px; 
  grid-gap: 15px; 
  grid-template-columns: 1fr; 
`
const SelectionStyle = styled.div`
  display: grid; 
  padding: 20px; 
  grid-template-columns: 1fr; 
  background-color:black;

`

export default function(){
  return <Page name="compare">
    <SelectionStyle>
      <SelectedCoins/>
      <PriceGrid/>
      <CompareButton />
    </SelectionStyle>
    <ChartGrid>
      <PriceChart/>
    </ChartGrid>
  </Page>
}
