import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from "../Shared/Tile";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/Styles";
import { AppContext } from "../App/AppProvider";

const JustifyRight = styled.div`
  justify-self: right; 
`
const CoinHeaderGridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TickerPriceStyle = styled.div`
  ${fontSizeBig};
`
const ChangePctStyle = styled.div`
  color: green; 
  ${props => props.red && css`
    color: red; 
  `}
`
const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
    display: grid; 
    ${fontSize3}
    grid-gap: 5px; 
    grid-template-columns: repeat(3, 1fr); 
    justify-items: right; 
  `}
  
  ${props => props.currentFavorite && css`
    ${greenBoxShadow}
    pointer-events: none; 
  `}
`

const numberFormat = number => {
  return +(number + '').slice(0, 7);
}

function ChangePercent({ data }) {
  return (
    <JustifyRight>
      <ChangePctStyle red={data.CHANGEPCT24HOUR < 0}>
        {numberFormat(data.CHANGEPCT24HOUR)}%
      </ChangePctStyle>
    </JustifyRight>
  );
}

// function clickCoinHandler(sym, coinKey, addSelectedCoin, removeSelectedCoin, isInCompareList) {

//   console.log(coinKey, "coinKey");

//   if(isInCompareList(coinKey)){
//     return removeSelectedCoin(coinKey)
//   } else {
//     return addSelectedCoin(coinKey)
//   }
// }

export default function ({ price, index }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
//onClick={clickCoinHandler(sym, index, addSelectedCoin, removeSelectedCoin, isInCompareList)}
  return (
    <AppContext.Consumer>
      {({ isInCompareList, selectedForCompare, addSelectedCoin, removeSelectedCoin }) =>
        <PriceTileStyled>
          <CoinHeaderGridStyle>
            <div> {sym} </div>
            <ChangePercent data={data} />
          </CoinHeaderGridStyle>
          <TickerPriceStyle>
            ${numberFormat(data.PRICE)}
          </TickerPriceStyle>
        </PriceTileStyled>
      }
    </AppContext.Consumer>
  )
}
     
