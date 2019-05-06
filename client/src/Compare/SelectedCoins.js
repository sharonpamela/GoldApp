
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
            The graph below compares all of the coins in the favorites list.
            {/* {selectedForCompare} */}
        </Style>
      )}
    </AppContext.Consumer>
  );
}
