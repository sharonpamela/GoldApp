import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from "./AppProvider";

const Logo = styled.div`
  font-size: 1.5em; 
`

const Bar = styled.div`
  display: grid; 
  margin-bottom: 40px; 
  grid-template-columns: 180px auto 100px 100px; 
`

const Balance = styled.div`
  font-size: 2em;
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

function toProperCase(lower){
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}){
  return (
    <AppContext.Consumer>
      {({firstVisit, page, setPage}) => (
        <ControlButtonElem
          active={page === name}
          onClick={()=> setPage(name)}
          hidden={firstVisit && name === 'dashboard'}
        >
          {toProperCase(name)}
        </ControlButtonElem>
        )}
    </AppContext.Consumer>
  )
}

export default function(){
  return (
    <AppContext.Consumer>
    {({user}) => (
    <Bar>
      <Logo> Gold </Logo>
      { user ? 
        <Balance>${user.balance}</Balance> :
        <h3>Hello!</h3>
      }
      
      { user ? 
        <a href="http://localhost:3001/api/logout"><ControlButton name="logout"/></a>:
        <a href="http://localhost:3001/auth/google"><ControlButton name="login"/></a> 
      } 
      <ControlButton active name="dashboard"/>
      <ControlButton name="settings"/>
    </Bar>
    )}
    </AppContext.Consumer>
  );
}
