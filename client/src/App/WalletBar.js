import React from 'react';
import styled from 'styled-components';
import { AppContext } from "./AppProvider";


const Bar = styled.div`
  display: grid; 
  margin-top: 40px; 
  grid-template-columns: 1fr; 
  background-color:black;
`

const Balance = styled.div`
  font-size: 1.5em;
`





export default function () {
  // return (<AppContext.Consumer>({ user }) =>{user ? <Bar>Balance: ${user.owned[0].CoinName}</Bar> : null }</AppContext.Consumer>);
    return (    <AppContext.Consumer>
      {({user}) => (
      <Bar>
        { user ? null : <Balance> Welcome to the Gole App. Login to start trading! </Balance>
        }        
        { user ? 
          <Balance> Balance: ${user.balance}  LTC: {user.owned[0].amount}   300:{user.owned[1].amount} ETH:{user.owned[2].amount} ETC:{user.owned[3].amount}  ZEC: {user.owned[4].amount} </Balance> :
          null 
        } 
       </Bar>
      )}
      </AppContext.Consumer>
  )
}
