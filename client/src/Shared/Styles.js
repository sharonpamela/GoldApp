import React from 'react';
import {AppContext} from "../App/AppProvider";

var theme;

export default function () {
  return (
    <AppContext.Consumer>
      {({pageTheme}) =>
          {theme = pageTheme}
      }
    </AppContext.Consumer>
  );
};
// const theme = 'dark';
// const theme = 'light';
export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : 'black';  // tiles in grids 
export const color2 = lightTheme ? 'white' : 'black';  // seach bar and menu color 
export const color3 = lightTheme ? '#09f010' : 'gold';  // confirm button font

if (lightTheme) {
  document.body.style.background = '#e1eaee';
  document.body.style.color = '#061a44';
}

export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;  // unknown effect, not a green color 
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme ? '#a9b6ff' : 'yellow'}`;  // shadow on tiles, 
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #DAA520`;  // hoover shadow 
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #DAA520`; // changed to gold from red

export const fontSizeBig = 'font-size: 2em';
export const fontSize1 = 'font-size: 1.5em;';
export const fontSize2 = 'font-size: 1.0em';
export const fontSize3 = 'font-size: .75em';

export const textAlignCenter = 'text-align: center;';