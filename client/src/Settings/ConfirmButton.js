import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import {fontSize1, greenBoxShadow, color3, subtleBoxShadow, lightBlueBackground} from "../Shared/Styles";

const ConfirmButtonStyled = styled.div`
  ${lightBlueBackground}
  ${subtleBoxShadow}
  opacity: 0.8;
  margin: 20px;
  color: ${color3}
  ${fontSize1} 
  padding: 5px;
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
    {({confirmFavorites}) =>
      <CenterDiv>
        <ConfirmButtonStyled onClick={confirmFavorites}>
          Confirm Favorites
        </ConfirmButtonStyled>
      </CenterDiv>
    }
  </AppContext.Consumer>;
}
