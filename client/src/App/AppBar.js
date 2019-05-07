import React from 'react';
import styled, { css } from 'styled-components';
import {AppContext} from "./AppProvider";
import {subtleBoxShadow, lightBlueBackground} from "./../Shared/Styles" 

const Logo = styled.div`
  font-size: 1.5em; 
  padding-left: 10px;
`

// const Login = styled.div`
//   font-size: 1.1em;
//   text-align: center;
//   margin: auto;
//   `
  
const Bar = styled.div`
  display: grid; 
  margin-bottom: 40px; 
  grid-template-columns: 1fr 100px 100px 100px 100px; 
  ${lightBlueBackground}
  opacity: 0.8;  
  ${subtleBoxShadow}
`

const ControlButtonElem = styled.div`
  margin: auto;
  text-align: center;
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
        <a href="http://localhost:3001/api/logout"><ControlButton name="logout"/></a>:
        <a href="http://localhost:3001/auth/google"><ControlButton name="login"/></a>
      } 

      {/* { user ? 
        <a href="/api/logout"><ControlButton name="logout"/></a>:
        <a href="/auth/google"><ControlButton name="login"/></a>
      }  */}
      <ControlButton active name="dashboard"/>
      <ControlButton name="settings"/>
      <ControlButton name="compare"/>
    </Bar>
    )}
    </AppContext.Consumer>
    
  );
}
