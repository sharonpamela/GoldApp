import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from "./AppProvider";

const Logo = styled.div`
  font-size: 1.5em; 
`

const Bar = styled.div`
  display: grid; 
  margin-top: 40px; 
  grid-template-columns: 180px 1fr 1fr 100px 100px; 
  background-color:black;
`

const Balance = styled.div`
  font-size: 1.5em;
`

const ControlButtonElem = styled.div`
  cursor: pointer; 
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03;
  `}
  ${props => props.hidden && css`
    display: none; 
  `}
`

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}



export default function () {
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <Bar>
          {user ? 
          <Logo> Your Wallet </Logo> : null }
          {user ?
            <Balance>Balance: ${user.owned[0].CoinName}</Balance> :
            <h3>Hello!</h3>
          }
         {/* // <Balance>{user.owned[0].CoinName} you own  </Balance> */}
        </Bar>
      )}
    </AppContext.Consumer>
  );
}
