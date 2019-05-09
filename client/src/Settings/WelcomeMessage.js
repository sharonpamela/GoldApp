import React from 'react';
import {AppContext} from "../App/AppProvider";
// import styled from 'styled-components';
// import {fontSize1, color3, subtleBoxShadow, lightBlueBackground} from "../Shared/Styles";

export default function ({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit}) =>
        firstVisit ? <div>
          Welcome to CryptoDash, please select your favorite coins to begin.{' '}
        </div> : null
      }
    </AppContext.Consumer>
  );
};
