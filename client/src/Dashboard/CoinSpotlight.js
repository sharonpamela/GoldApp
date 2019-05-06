import React from 'react';
import styled from 'styled-components';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import CoinImage from '../Shared/CoinImage';
import Buybutton from './BuyButton';
import Sellbutton from './SellButton';

const SpotlightName = styled.h2`
  text-align: center; 
`

export default function (){
  return (
    <AppContext.Consumer>
      {({currentFavorite, coinList, user, isInStore}) =>
        <Tile>
          <SpotlightName> {coinList[currentFavorite].CoinName} </SpotlightName>
          <CoinImage spotlight coin={coinList[currentFavorite]}/>
          { (user && isInStore(coinList[currentFavorite].Name)) ? <Buybutton/> : null }
          { (user && isInStore(coinList[currentFavorite].Name)) ? <Sellbutton/> : null }
        </Tile>
      }
    </AppContext.Consumer>
  )
}
