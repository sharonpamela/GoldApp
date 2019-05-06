import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from "../App/AppProvider";
import {fontSize1, greenBoxShadow, color3, subtleBoxShadow, lightBlueBackground} from "../Shared/Styles";


const ControlButtonElem = styled.div`
  margin: auto;
  cursor: pointer; 
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03;
  `}
  ${props => props.hidden && css`
    display: none; 
  `}
`


function ThemeButton(){
  console.log("theme btn")
  return(
    <AppContext.Consumer>
      {({theme, setTheme})=> (
        <ControlButtonElem
          onClick={()=> setTheme(theme)}
        >
        {/* {toProperCase(theme)} */}
        Theme
        </ControlButtonElem>  
      )}
      </AppContext.Consumer>
  )
}

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3}
  ${fontSize1} 
  padding: 5px;
  ${lightBlueBackground}
  ${subtleBoxShadow}
  opacity: 0.8;
  cursor: pointer; 
  &:hover {
    ${greenBoxShadow} 
  }
`

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function () {
  return <AppContext.Consumer>
    {({changeTheme}) =>
      <CenterDiv>
        <ConfirmButtonStyled onClick={changeTheme}>
          <ThemeButton theme='dark'/>
        </ConfirmButtonStyled>
      </CenterDiv>
    }
  </AppContext.Consumer>;
}
