import React from 'react';
import styled from 'styled-components';
import { AppContext } from "./AppProvider";
import {subtleBoxShadow} from "./../Shared/Styles";

const Bar = styled.div`
  display: grid; 
  margin-top: 10px; 
  grid-template-columns: 1fr; 
  background-color:black;
  opacity: 0.8;
  width: auto;
  text-align: center;
  margin-bottom: 0px;
  ${subtleBoxShadow}

`
const Inventory = styled.div`
  margin-top: 0px;
  grid-template-columns: 150px 1fr;
  background-color:black;
  `
  const Inventory2 = styled.div`
  margin-top: 0px;
  grid-template-columns: 150px 1fr;
  background-color:black;
  margin-bottom: 5px;
  `
const Amount = styled.div`
  font-size: 1.5em;
  text-align: left;
  padding-left: 15px;
  `
const Welcome = styled.div`
  text-align: center
  font-size: 1.5em;
  `

export default function () {
    return (    <AppContext.Consumer>
      {({user}) => (
      <Bar>
        { user ? <Welcome> Your Wallet ${user.balance}</Welcome> : null }
        { user ? null : <Welcome> Welcome to the Gold App. Login to start trading! </Welcome>}        
      <Inventory>
        {user ? <Amount>LTC : {user.owned[0].amount} </Amount> : null}
      </Inventory>
      <Inventory>
        {user ? <Amount>300  : {user.owned[1].amount}  </Amount> : null}
      </Inventory>
      <Inventory>
        {user ? <Amount>ETH : {user.owned[2].amount}  </Amount> : null}
      </Inventory>
      <Inventory>
        {user ? <Amount>ETC : {user.owned[3].amount}  </Amount> : null}
      </Inventory>
      <Inventory2>
        {user ? <Amount>ZEC : {user.owned[4].amount} </Amount> : null}
      </Inventory2>
      </Bar>

      )}
      </AppContext.Consumer>
  )

  //  LTC: {user.owned[0].amount}   300:{user.owned[1].amount} ETH:{user.owned[2].amount} ETC:{user.owned[3].amount}  ZEC: {user.owned[4].amount}
}
