import highchartsConfig from './HighchartsConfig';
import React from 'react';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import ReactHighcharts from 'react-highcharts';
import HighchartsTheme from './HighchartsTheme';
import {backgroundColor2, fontSize2} from "../Shared/Styles";
import styled from 'styled-components';


ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const ChartSelect = styled.select`
  ${backgroundColor2}
  ${fontSize2}
  color: purple; 
  border: 1px solid purple;
  float: right; 
`;

export default function(){
  return (
    <AppContext.Consumer>
      {({arrayOfSeriesDataSets, changeChartSelect}) =>
        <Tile>
          <ChartSelect
            defaultValue="months"
            onChange={e => changeChartSelect(e.target.value)}
          >
            <option value="days"> Days </option>
            <option value="weeks"> Weeks </option>
            <option value="months"> Months </option>
          </ChartSelect>
          {arrayOfSeriesDataSets ?
            <ReactHighcharts config={highchartsConfig(arrayOfSeriesDataSets)}/>
            : <div> Loading Historical Data </div>
          }
        </Tile>
      }
    </AppContext.Consumer>
  )
}
