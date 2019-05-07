import React from 'react';
import styled from 'styled-components';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import PriceChart from './PriceChart';
import SelectedCoins from './SelectedCoins';
import {subtleBoxShadow, lightBlueBackground} from './../Shared/Styles';

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
  ${lightBlueBackground}
  opacity: 0.8;
  ${subtleBoxShadow};
}
`

export default function(){
  return <Page name="compare">
    <SelectionStyle>
      <SelectedCoins/>
      <PriceGrid/>
      {/* <CompareButton /> */}
    </SelectionStyle>
    <ChartGrid>
      <PriceChart/>
    </ChartGrid>
  </Page>
}
