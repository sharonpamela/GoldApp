
console.log("LOADING STYLES.JS")
var theme;
console.log(theme, "theme");

let localStorageObj = JSON.parse(localStorage.getItem('cryptoDash'))
if(!localStorageObj){
  theme = 'dark';
}
else{theme = localStorageObj.pageTheme
}
console.log(theme, "theme");

// const theme = 'dark';
// const theme = 'light';
export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : 'black';  // tiles in grids 
export const color2 = lightTheme ? 'white' : 'black';  // seach bar and menu color 
export const color3 = lightTheme ? '#061a44' : 'gold';  // confirm button font
export const color4 = lightTheme ? `white` : `white`; // for disabled tiles



if (lightTheme) {
  document.body.style.background = "white";
  document.body.style.color = '#061a44';
}

export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;
export const whiteTile = `backgound-color: ${color4};`;

export const fontColorGreen = `color: #03A9F4`;  // unknown effect, not a green color 
export const fontColorWhite = `color: white`;

export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme ? '#a9b6ff' : 'purple'}`;  // shadow on tiles, 
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px ${lightTheme ? 'purple' : 'white' }`;  // hoover shadow 
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px red`; // changed to gold from red


export const fontSizeBig = 'font-size: 2em';
export const fontSize1 = 'font-size: 1.5em;';
export const fontSize2 = 'font-size: 1.0em';
export const fontSize3 = 'font-size: .75em';

export const textAlignCenter = 'text-align: center;';