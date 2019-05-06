
import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
// import {SelectableTile, DisabledTile, DeletableTile} from "../Shared/Tile";
// import CoinHeaderGrid from './CoinHeaderGrid';


const Style = styled.div`
  display: grid; 
  grid-template-columns: 1fr; 
  grid-gap: 15px; 
`

export default function () {
  return (
    <AppContext.Consumer>
      {({selectedForCompare}) => (
        <Style>
            Select the coins you wish to compare then click "Compare": 
            {selectedForCompare}
        </Style>
      )}
    </AppContext.Consumer>
  );
}
