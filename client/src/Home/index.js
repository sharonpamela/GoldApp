import React from 'react';
import Page from '../Shared/Page';
import './home.css';
import { AppContext } from "./../App/AppProvider";
import styled from 'styled-components';
import { fontSize1, greenBoxShadow, color3 } from "../Shared/Styles";

const ButtonStyled = styled.div`
  margin: 20px;
  color: ${color3}
  ${fontSize1} 
  padding: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer; 
  text-decoration:none;
  &:hover {
    ${greenBoxShadow} 
  }
`

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

//sets up an onclick event so the Continue as guess button renders the next pg
function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit, setPage }) => (
        <div onClick={() => setPage(name)}>Continue As Guess</div>
      )}
    </AppContext.Consumer>
  )
}

export default function () {
  return (
    <AppContext.Consumer>
      {({ setPage }) => (
        <Page name="landing">
          <CenterDiv>
            <h1>Welcome to Gold!</h1>
            <div onClick={()=>setPage("settings")} href="/auth/google"><ButtonStyled >Login with Google</ButtonStyled></div>
            <ButtonStyled><ControlButton name="settings" /></ButtonStyled>
          </CenterDiv>
        </Page>
      )}
    </AppContext.Consumer>

  )
}