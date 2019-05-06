import styled from 'styled-components';
import {subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow, whiteTile} from "./Styles";

export const Tile = styled.div`
${lightBlueBackground}
  ${subtleBoxShadow}
  opacity: 0.8;
  padding: 10px;   
`

export const SelectableTile = styled(Tile)`
${lightBlueBackground}
&:hover {
    cursor: pointer; 
    ${greenBoxShadow}
  }
`

export const DeletableTile = styled(SelectableTile)`
${lightBlueBackground}
&:hover{
		cursor: pointer; 
    ${redBoxShadow}
	}
`;

export const DisabledTile = styled(Tile)`
	pointer-events: none;
  opacity: 0.4;
  ${whiteTile}
`;

export const StoreTile = styled(Tile)`
  pointer-events: none;
  ${lightBlueBackground}
  opacity: 0.8;
  `
